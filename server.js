require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add CORS middleware
const contactRoutes = require('./routes/contactRoutes');
const connectDB = require('./db'); // Ensure the database file is correctly imported

// Initialize Express
const app = express();

// Middleware
app.use(cors()); // Enable cross-origin requests if frontend/backend run separately
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/contact', contactRoutes); // Ensure this points to the correct controller

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
