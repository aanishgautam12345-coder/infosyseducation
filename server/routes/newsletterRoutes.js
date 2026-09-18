const express = require('express');
const router = express.Router();
const { subscribe, unsubscribe } = require('../controllers/newsletterController');
const { newsletterValidation } = require('../middleware/validation');

router.post('/subscribe', newsletterValidation, subscribe);
router.get('/unsubscribe/:email', unsubscribe);

module.exports = router;
