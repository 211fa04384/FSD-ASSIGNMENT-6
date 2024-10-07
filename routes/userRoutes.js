const express = require('express');
const { getUserDashboard } = require('./controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Dashboard route (protected)
router.get('/dashboard', authMiddleware, getUserDashboard);

module.exports = router;
