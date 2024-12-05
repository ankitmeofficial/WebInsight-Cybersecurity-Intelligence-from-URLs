const mongoose = require('mongoose');

// Define the schema for the contact form data
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
}, {
  timestamps: true, // Add timestamps for when the form was submitted
});

module.exports = mongoose.model('Contact', contactSchema);
