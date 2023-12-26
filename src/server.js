const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
require('dotenv').config();
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./auth/routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());
app.use(cors());  // Enable CORS for all routes

/**
 * Route to welcome message.
 * @route GET /
 * @returns {string} - Welcome message.
 */
app.get('/', (req, res) => {
  res.send('Welcome to the Shopping Cart API!');
});

// Routes
app.use('/items', itemRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
