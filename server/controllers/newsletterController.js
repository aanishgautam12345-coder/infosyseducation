const { validationResult } = require('express-validator');

exports.subscribe = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const email = req.body.email;

  // Respond immediately
  res.status(201).json({
    success: true,
    message: 'Successfully subscribed to our newsletter!',
  });

  // Fire-and-forget: save to DB in background
  (async () => {
    try {
      const Newsletter = require('../models/Newsletter');
      const existing = await Newsletter.findOne({ email });
      if (existing && existing.isActive) {
        return;
      }
      if (existing) {
        existing.isActive = true;
        await existing.save();
      } else {
        const subscriber = new Newsletter({ email });
        await subscriber.save();
      }
    } catch (dbError) {
      console.warn('DB save failed:', dbError.message);
    }
  })();
};

exports.unsubscribe = async (req, res) => {
  try {
    try {
      const Newsletter = require('../models/Newsletter');
      const subscriber = await Newsletter.findOne({ email: req.params.email });
      if (!subscriber) {
        return res.status(404).json({ success: false, message: 'Subscriber not found.' });
      }
      subscriber.isActive = false;
      await subscriber.save();
    } catch (dbError) {
      return res.status(404).json({ success: false, message: 'Subscriber not found.' });
    }
    res.status(200).json({ success: true, message: 'You have been unsubscribed.' });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};
