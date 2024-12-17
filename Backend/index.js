const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Game = require('./models/Game');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/GamersHavenHub')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.listen(8080, () => {
    console.log("Server running on port 8080");
});

// API Route
app.get('/api/games', async (req, res) => {
    const { platform } = req.query;

    try {
        const games = await Game.find({ id1: platform });
        res.json(games);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

