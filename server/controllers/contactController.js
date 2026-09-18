const { validationResult } = require('express-validator');
const { sendEmail, contactEmailToOffice, contactEmailToUser } = require('../utils/sendEmail');

exports.createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const data = { ...req.body };

  // Respond immediately
  res.status(201).json({
    success: true,
    message: 'Your message has been sent successfully.',
  });

  // Fire-and-forget: save to DB and send emails in background
  (async () => {
    try {
      const Contact = require('../models/Contact');
      const contact = new Contact(data);
      await contact.save();
    } catch (dbError) {
      console.warn('DB save failed:', dbError.message);
    }

    try {
      await Promise.allSettled([
        sendEmail({
          to: process.env.MAILGUN_TO_EMAIL,
          from: process.env.MAILGUN_FROM_EMAIL,
          subject: `New Contact Inquiry - ${data.subject}`,
          html: contactEmailToOffice(data),
        }),
        sendEmail({
          to: data.email,
          from: process.env.MAILGUN_FROM_EMAIL,
          subject: 'Thank You for Contacting Us - Infosys Education & Advisory',
          html: contactEmailToUser(data),
        }),
      ]);
    } catch (emailError) {
      console.error('Email send failed:', emailError.message);
    }
  })();
};
