const express = require('express');
const router = express.Router();
const { createContact } = require('../controllers/contactController');
const { contactValidation } = require('../middleware/validation');

router.post('/', contactValidation, createContact);

module.exports = router;
