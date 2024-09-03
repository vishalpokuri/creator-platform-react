const User = require("../models/Users");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();
const PORT = 5000;

//middleware
app.use(cors());
app.use(bodyparser.json());

mongoose
  .connect(
    "mongodb+srv://vishal-new:sNSaFpwKNvUSutIN@cluster0.v5ltx.mongodb.net/"
  )
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/onboarding", async (req, res) => {
  const {
    userName,
    aliasName,
    walletAddress,
    bio,
    socials: { instagram, twitter },
  } = req.body;

  try {
    const newUser = new User({
      userName,
      aliasName,
      walletAddress,
      bio,
      socials: { instagram, twitter },
    });

    await newUser.save();
    res.status(201).json({ msg: "User added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding user", error });
  }
});
