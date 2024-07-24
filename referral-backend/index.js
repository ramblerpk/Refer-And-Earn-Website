// referral-backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/referrals', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Referral schema
const referralSchema = new mongoose.Schema({
  email: { type: String, required: true },
  referralLink: { type: String, required: true },
});

const Referral = mongoose.model('Referral', referralSchema);

// POST endpoint to save referral data
app.post('/api/referrals', async (req, res) => {
  const { email, referralLink } = req.body;

  if (!email || !referralLink) {
    return res.status(400).json({ error: 'Email and referral link are required' });
  }

  const referral = new Referral({ email, referralLink });

  try {
    await referral.save();
    res.status(201).json(referral);
  } catch (error) {
    res.status(500).json({ error: 'Error saving referral data' });
  }
});

// GET endpoint to retrieve all referrals (for testing purposes)
app.get('/api/referrals', async (req, res) => {
  try {
    const referrals = await Referral.find();
    res.status(200).json(referrals);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving referral data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
