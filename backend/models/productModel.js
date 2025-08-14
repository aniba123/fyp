
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },   // changed from image
  category: { type: String, default: 'Uncategorized' },  // default to avoid error
  description: { type: String },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
