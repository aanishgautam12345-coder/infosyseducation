const { body } = require('express-validator');

const appointmentValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('city').trim().notEmpty().withMessage('City is required'),
  body('state').trim().notEmpty().withMessage('State/Region is required'),
  body('country').trim().notEmpty().withMessage('Country is required'),
  body('appointmentDate').isISO8601().withMessage('Valid appointment date is required'),
];

const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
];

const newsletterValidation = [
  body('email').trim().isEmail().withMessage('Valid email is required'),
];

module.exports = {
  appointmentValidation,
  contactValidation,
  newsletterValidation,
};
