const Contact = require('../models/contactModel');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Check for empty fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Create and save the contact entry
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.error('Error submitting form:', err.message);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};
