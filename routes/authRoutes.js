const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { check } = require('express-validator');

const router = express.Router();

// Register User
router.post('/register', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
], registerUser);

// Login User
router.post('/login', loginUser);

module.exports = router;
