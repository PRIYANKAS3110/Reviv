const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactFormDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email, phone } = req.body;

    const newContact = new Contact({ name, email, phone });

    newContact.save((err) => {
        if (err) {
            res.status(500).json({ message: 'Error saving contact information' });
        } else {
            res.status(200).json({ message: 'Contact information saved successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
