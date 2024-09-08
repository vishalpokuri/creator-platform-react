const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const userSchema = new mongoose.Schema({
  type: { 
    type: String,
    required: true,
  },
  userName: { 
    type: String, 
    required: true,
    unique: true,
    trim: true,
  },
  aliasName: { 
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  walletAddress: { 
    type: String,
    required: true,
    // unique: true,
    trim: true,
  },
  bio: { 
    type: String, 
    required: false,
  },
  // profile: {
  //   type: String,
  //   required: false,
  // },
  socials: {
    instagram: { type: String, required: false },
    twitter: { type: String, required: false },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
