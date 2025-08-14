

import Product from '../models/productModel.js'



// @desc   Create a new product
// @route  POST /api/products
// import Product from '../models/productModel.js';

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;

    const product = new Product({
      name,
      price,
      description,
      imageUrl,
      category: 'Dashboard', // default category (you can change it from frontend too)
    });

    await product.save();

    // ✅ Proper JSON response — this fixes the frontend error
    res.status(201).json({
      message: 'Product added successfully',
      product,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Failed to add product',
      error: err.message,
    });
  }
};


// @desc   Get all products
// @route  GET /api/products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc   Get single product
// @route  GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc   Update product
// @route  PUT /api/products/:id
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// @desc   Delete product
// @route  DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteProductByName = async (req, res) => {
  try {
    const result = await Product.findOneAndDelete({ name: req.params.name });

    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


// 👇 NEW FUNCTION
export const updateProductByName = async (req, res) => {
  const { name } = req.params;
  const updateFields = req.body;

  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { name },
      { $set: updateFields },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
