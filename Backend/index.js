const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Game = require("./models/Game");
const Console = require("./models/Console");
const Accessories = require("./models/Accessories");

// Initialize Express
const app = express();

// Middleware
app.use(express.json());

const cors = require("cors");

app.use(cors());


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Backend is working");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// API Route for Games
app.get("/api/games", async (req, res) => {
  const { platform } = req.query;
  try {
    const games = await Game.find({ id1: platform });
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
});

// API Route for Consoles
app.get("/api/consoles", async (req, res) => {
  const { platform } = req.query;
  try {
    const games = await Console.find({ id1: platform });
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
});

// API Route for Accessories
app.get("/api/accessories", async (req, res) => {
  const { platform } = req.query;
  try {
    const games = await Console.find({ id1: platform });
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
});
