require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Game = require("./models/Game");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Atlas Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Database connection error:", err));

// API Endpoint
app.get("/api/games", async (req, res) => {
  const { platform } = req.query;
  try {
    const games = await Game.find({ id1: platform });
    res.json(games);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
