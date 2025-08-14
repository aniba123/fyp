// /controllers/orderController.js
import Order from '../models/Order.js';

export const placeOrder = async (req, res) => {
  try {
    const { customer, items, total, orderNumber, date } = req.body;

        console.log("📥 Incoming Order:", req.body); // Log input

    if (!customer || !items || !total) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newOrder = new Order({
      customer,
      items,
      total,
      orderNumber,
      date,
    });

    await newOrder.save();
        console.log("✅ Order saved:", savedOrder); // Log result

    res.status(201).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
