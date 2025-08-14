

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },  // <--- ye hona chahiye
  email: { type: String, unique: true },
  password: String,

  // ✅ Reset token fields
  resetToken: String,
  resetTokenExpiry: Date,

  // ✅ New field to track password reset time
  passwordResetAt: Date,
});

const User = mongoose.model("User", userSchema);
export default User;
