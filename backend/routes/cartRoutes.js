

import express from 'express';
import { protect } from '../middleware/auth.js';
import Cart from '../models/Cart.js';

const router = express.Router();

// @desc    Get user's cart
// @route   GET /api/cart
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id })
      .populate('items.productId', 'name images price') // Populate product info
      .lean();

    if (!cart || cart.items.length === 0) {
      return res.status(200).json({
        status: 'success',
        data: {
          items: [],
          message: 'Your cart is empty'
        }
      });
    }

    const response = {
      status: 'success',
      data: {
        items: cart.items.map(item => ({
          productId: item.productId._id,
          title: item.productId.name,
          image: item.productId.images?.[0] || '', // fallback if images is undefined
          price: item.productId.price,
          quantity: item.quantity
        }))
      }
    };

    res.status(200).json(response);

  } catch (err) {
    console.error('Error fetching cart:', err);
    res.status(500).json({
      status: 'error',
      message: 'An error occurred while fetching your cart'
    });
  }
});

export default router;
