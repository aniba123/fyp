


import express from 'express';
import Order from '../models/Order.js'; // Make sure Order.js uses ES module too

const router = express.Router();

// POST /api/checkout
router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      contact,
      address,
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
      cartItems,
      total
    } = req.body;

    const newOrder = new Order({
      name,
      email,
      contact,
      address,
      paymentMethod,
      cardDetails: paymentMethod !== 'cod' ? { cardNumber, expiryDate, cvv } : null,
      cartItems,
      total,
      createdAt: new Date()
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong while placing the order' });
  }
});

export default router;
