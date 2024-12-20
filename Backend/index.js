const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Game = require("./models/Game");
const Console = require("./models/Console");
const Accessories = require("./models/Accessories");
const Component = require("./models/PCComponents");
const User = require("./models/User");

// Initialize Express
const app = express();

// Middleware
app.use(express.json());

const cors = require("cors");

const corsOptions = { 
  origin: ['https://gamershavenhub.vercel.app', 'http://localhost:5173'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
};

app.use(cors(corsOptions));


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
    const games = await Game.find({ platform: platform });
    if (games.length === 0) {
      return res.status(404).send("No games found for this platform");
    }
    res.json(games);
  } catch (error) {
    console.error("Error fetching games:", error);
    res.status(500).send("Error fetching data");
  }
});


// API Route for Consoles
app.get("/api/consoles", async (req, res) => {
  try {
    const games = await Console.find();
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
});

// API Route for Accessories
app.get("/api/accessories", async (req, res) => {
  try {
    const games = await Accessories.find();
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
});

// API Route for PCComponents
app.get("/api/components", async (req, res) => {
  try {
    const games = await Component.find();
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
});

app.post('/api/register', async (req, res) => {
  try {
      const { firstName, lastName, mobilenumber, email, password } = req.body;

      const newUser = new User({
          firstname: firstName,
          lastname: lastName,
          mobilenumber,
          email,
          password,
      });

      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ error: "An error occurred while registering" });
  }
});

// API route to handle login
app.post('/api/login', async (req, res) => {
  try {
      const { email, password } = req.body;
      
      const user = await User.findOne({ email: email });

      if (!user || user.password !== password) {
          return res.status(400).json({ error: "Invalid email or password" });
      }

      res.status(200).json({ message: "Login successful", username: user.username });
  } catch (error) {
      res.status(500).json({ error: "An error occurred during login" });
  }
});

app.get('/api/pccontent/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const game = await Component.findById(id);
      if (!game) {
          return res.status(404).json({ error: "Game not found" });
      }
      res.status(200).json(game);
  } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching the game details" });
  }
});

app.get('/api/gamescontent/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const game = await Game.findById(id);
      if (!game) {
          return res.status(404).json({ error: "Game not found" });
      }
      res.status(200).json(game);
  } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching the game details" });
  }
});

app.get('/api/consolescontent/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const game = await Console.findById(id);
      if (!game) {
          return res.status(404).json({ error: "Game not found" });
      }
      res.status(200).json(game);
  } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching the game details" });
  }
});

app.get('/api/accessoriescontent/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const game = await Accessories.findById(id);
      if (!game) {
          return res.status(404).json({ error: "Game not found" });
      }
      res.status(200).json(game);
  } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching the game details" });
  }
});