const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  aliasName: { type: String, required: true },
  walletAddress: { type: String, required: true },
  bio: { type: String, required: false },
  socials: {
    instagram: { type: String, required: false },
    twitter: { type: String, required: false },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
