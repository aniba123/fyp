import express from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = express.Router();

// POST - Save contact form data
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = new ContactMessage({ name, email, subject, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: "Message received successfully" });
  } catch (error) {
    console.error("❌ Error saving contact message:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
