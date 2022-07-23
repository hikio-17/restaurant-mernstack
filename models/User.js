const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: string,
    required: true,
  },
  email: {
    type: string,
    required: true,
  },
  password: {
    type: string,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
