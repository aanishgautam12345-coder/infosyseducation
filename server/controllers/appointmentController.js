const { validationResult } = require('express-validator');
const { sendEmail, appointmentEmailToUser, appointmentEmailToOffice } = require('../utils/sendEmail');

exports.createAppointment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const data = { ...req.body };

  // Respond immediately
  res.status(201).json({
    success: true,
    message: 'Appointment booked successfully.',
  });

  // Fire-and-forget: save to DB and send emails in background
  (async () => {
    try {
      const Appointment = require('../models/Appointment');
      const appointment = new Appointment(data);
      await appointment.save();
    } catch (dbError) {
      console.warn('DB save failed:', dbError.message);
    }

    try {
      await Promise.allSettled([
        sendEmail({
          to: data.email,
          from: process.env.MAILGUN_FROM_EMAIL,
          subject: 'Appointment Confirmation - Infosys Education & Advisory',
          html: appointmentEmailToUser(data),
        }),
        sendEmail({
          to: process.env.MAILGUN_TO_EMAIL,
          from: process.env.MAILGUN_FROM_EMAIL,
          subject: `New Appointment Booking - ${data.name}`,
          html: appointmentEmailToOffice(data),
        }),
      ]);
    } catch (emailError) {
      console.error('Email send failed:', emailError.message);
    }
  })();
};
