const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
const Game = require("./models/Game");

// Initialize Express
const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "https://gamershavenhub.vercel.app/",
    method: 'GET,POST,PUT,DELETE',    
    withCredentials: true,    
    crossorigin: true,    
    mode: 'no-cors',  
  })
);



// Start server
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

// API Route
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
