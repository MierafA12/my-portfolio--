const express = require('express');
const router = express.Router();
const Contact = require('./contactModel');

module.exports = (transporter) => {
  router.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });

    try {
      await newContact.save();

      // Sending email
      const mailOptions = {
        from: email,
        to: 'mierafabebe12@gmail.com',
        subject: `New message from ${name}`,
        text: message,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).send('Error sending email');
        }
        res.status(200).send('Contact data saved and email sent successfully');
      });
    } catch (error) {
      res.status(500).send('Error saving contact data');
    }
  });

  // Route to get all contact messages
  router.get('/messages', async (req, res) => {
    try {
      const messages = await Contact.find({});
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching messages' });
    }
  });

  return router;
};
