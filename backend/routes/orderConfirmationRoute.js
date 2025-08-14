import express from "express";
import Order from "../models/order.js";
import { sendOrderConfirmationEmail } from "../utils/sendOrderConfirmationEmail.js";

const router = express.Router();

router.post("/confirm-order", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();

    // ✅ Send email
    await sendOrderConfirmationEmail(newOrder);

    res.status(201).json({
      message: "Order placed successfully!",
      order: newOrder,
    });
  } catch (err) {
    console.error("Order failed:", err);
    res.status(500).json({
      message: "Order failed!",
      error: err.message,
    });
  }
});

export default router;
