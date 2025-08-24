// routes/newsletterRoutes.js
import express from "express";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

// POST /api/subscribe
router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  // validation
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  try {
    const subscriber = new Subscriber({ email });
    await subscriber.save();
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(200).json({ message: "Already subscribed" });
    }
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
