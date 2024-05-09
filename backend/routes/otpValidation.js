const express = require('express');
const router = express.Router();

// Import necessary modules
const randomstring = require('randomstring');

// Store OTPs in memory (for demonstration purposes)
const otps = {};

// Endpoint to generate OTP for phone number
router.post('/phone', (req, res) => {
    const { phoneNumber } = req.body;
    const otp = randomstring.generate({ length: 6, charset: 'numeric' });

    // Store OTP in memory (replace with database storage in production)
    otps[phoneNumber] = otp;

    // Simulate sending OTP to phone number (replace with actual SMS service in production)
    console.log(`OTP for phone number ${phoneNumber}: ${otp}`);
    res.status(200).json({ message: 'OTP sent to phone number' });
});

// Endpoint to validate OTP for phone number
router.post('/validate', (req, res) => {
    const { phoneNumber, otp } = req.body;

    // Check if OTP matches the one stored in memory
    if (otps[phoneNumber] && otps[phoneNumber] === otp) {
        res.status(200).json({ message: 'OTP is valid' });
    } else {
        res.status(400).json({ error: 'Invalid OTP' });
    }
});

module.exports = router;
