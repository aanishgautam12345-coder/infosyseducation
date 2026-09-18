const express = require('express');
const router = express.Router();
const { createAppointment } = require('../controllers/appointmentController');
const { appointmentValidation } = require('../middleware/validation');

router.post('/', appointmentValidation, createAppointment);

module.exports = router;
