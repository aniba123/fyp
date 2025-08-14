const Product = require('../models/Product');
const { validationResult } = require('express-validator');

exports.createProduct = async (req, res) => {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Create new product
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
      isNew: req.body.isNew || false,
      isSale: req.body.isSale || false
    });

    // Save to database
    const savedProduct = await product.save();

    // Emit Socket.IO event for real-time updates
    if (req.app.get('socketio')) {
      req.app.get('socketio').emit('newProduct', savedProduct);
    }

    res.status(201).json({
      success: true,
      data: savedProduct
    });
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
};