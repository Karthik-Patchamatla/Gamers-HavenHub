const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Game = require('./models/Game');

const app = express();

// Middleware
app.use(express.json());
app.use(cors(
    {
        origin: 'https://gamershavenhub.vercel.app/',
        methods: 'GET,POST',
        allowedHeaders: 'Content-Type'
    }
));

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error('MONGO_URI environment variable is not defined.');
  process.exit(1);
}

mongoose
  .connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

app.listen(8080, () => {
    console.log("The server is running on port 8080");
});

// API Route
app.get('/api/games', async (req, res) => {
  const { platform } = req.query;

  try {
    const games = await Game.find(platform ? { id1: platform } : {});
    res.json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).send('Error fetching data');
  }
});

// Export the app for Vercel
module.exports = app;
