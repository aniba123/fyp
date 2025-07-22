const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,

  // ✅ Reset token fields
  resetToken: String,
  resetTokenExpiry: Date,

  // ✅ New field to track password reset time
  passwordResetAt: Date,  // ⬅️ Add this line
});

module.exports = mongoose.model("User", userSchema);
