const Mailgun = require('mailgun.js');
const formData = require('form-data');

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});

const sendEmail = async ({ to, from, subject, html }) => {
  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from,
      to: [to],
      subject,
      html,
    });
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('Email send error:', error.message);
    return false;
  }
};

const appointmentEmailToUser = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1a3a5c; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .details { background-color: white; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .details p { margin: 8px 0; }
        .label { font-weight: bold; color: #1a3a5c; }
        .footer { background-color: #1a3a5c; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; }
        .footer a { color: #ffd700; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Infosys Education & Advisory</h1>
          <p>Appointment Confirmation</p>
        </div>
        <div class="content">
          <p>Dear <strong>${data.name}</strong>,</p>
          <p>Thank you for booking an appointment with Infosys Education & Advisory. We are pleased to confirm your appointment details:</p>
          <div class="details">
            <p><span class="label">Name:</span> ${data.name}</p>
            <p><span class="label">Email:</span> ${data.email}</p>
            <p><span class="label">Phone:</span> ${data.phone}</p>
            <p><span class="label">Address:</span> ${data.streetAddress || ''} ${data.streetAddress2 || ''}, ${data.city}, ${data.state}, ${data.country}</p>
            <p><span class="label">Appointment Date & Time:</span> ${new Date(data.appointmentDate).toLocaleString()}</p>
            ${data.message ? `<p><span class="label">Message:</span> ${data.message}</p>` : ''}
          </div>
          <p>Our team will contact you shortly to confirm your appointment.</p>
          <p>If you need to reschedule or cancel, please contact us at <a href="mailto:info@kiec.edu.np">info@kiec.edu.np</a> or call us.</p>
        </div>
        <div class="footer">
          <p><strong>Infosys Education & Advisory</strong></p>
          <p>📞 +977 9714607930 | +977 9714607932</p>
          <p>📧 <a href="mailto:infosyseducation@gmail.com">infosyseducation@gmail.com</a></p>
          <p>📍 Aitabare Road, Itahari-06, Sunsari, Nepal</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

const appointmentEmailToOffice = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1a3a5c; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .details { background-color: white; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .details p { margin: 8px 0; }
        .label { font-weight: bold; color: #1a3a5c; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Appointment Booking</h1>
        </div>
        <div class="content">
          <p>A new appointment has been booked through the website:</p>
          <div class="details">
            <p><span class="label">Name:</span> ${data.name}</p>
            <p><span class="label">Email:</span> ${data.email}</p>
            <p><span class="label">Phone:</span> ${data.phone}</p>
            <p><span class="label">Address:</span> ${data.streetAddress || ''} ${data.streetAddress2 || ''}, ${data.city}, ${data.state}, ${data.country}</p>
            <p><span class="label">Appointment Date & Time:</span> ${new Date(data.appointmentDate).toLocaleString()}</p>
            ${data.message ? `<p><span class="label">Message:</span> ${data.message}</p>` : ''}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

const contactEmailToOffice = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1a3a5c; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .details { background-color: white; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .details p { margin: 8px 0; }
        .label { font-weight: bold; color: #1a3a5c; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Inquiry</h1>
        </div>
        <div class="content">
          <p>A new inquiry has been submitted through the website contact form:</p>
          <div class="details">
            <p><span class="label">Name:</span> ${data.name}</p>
            <p><span class="label">Email:</span> ${data.email}</p>
            <p><span class="label">Phone:</span> ${data.phone || 'Not provided'}</p>
            <p><span class="label">Subject:</span> ${data.subject}</p>
            <p><span class="label">Message:</span></p>
            <p>${data.message}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

const contactEmailToUser = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1a3a5c; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .footer { background-color: #1a3a5c; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; }
        .footer a { color: #ffd700; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Infosys Education & Advisory</h1>
          <p>We've Received Your Inquiry</p>
        </div>
        <div class="content">
          <p>Dear <strong>${data.name}</strong>,</p>
          <p>Thank you for reaching out to Infosys Education & Advisory. We have received your inquiry regarding "<strong>${data.subject}</strong>".</p>
          <p>Our team will review your message and get back to you within 24-48 hours.</p>
          <p>For urgent inquiries, please call us at <strong>+977 9714607930</strong>.</p>
        </div>
        <div class="footer">
          <p><strong>Infosys Education & Advisory</strong></p>
          <p>📞 +977 9714607930 | +977 9714607932</p>
          <p>📧 <a href="mailto:infosyseducation@gmail.com">infosyseducation@gmail.com</a></p>
          <p>📍 Aitabare Road, Itahari-06, Sunsari, Nepal</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = {
  sendEmail,
  appointmentEmailToUser,
  appointmentEmailToOffice,
  contactEmailToOffice,
  contactEmailToUser,
};
