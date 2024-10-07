const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes'); // Adjust the path as necessary
const path = require('path');
require('dotenv').config();


const app = express();
console.log("JWT_SECRET:", process.env.JWT_SECRET);


// Middleware to parse JSON
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use authRoutes for routes starting with /api/auth
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/user-management-du', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
