


import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customer: {
    name: String,
    email: String,
    address: String,
    phone: String,
  },
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      quantity: Number,
    }
  ],
  total: Number,
  orderNumber: Number,
  date: String,
}, { timestamps: true });

// const Order = mongoose.model('Order', orderSchema);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema)

export default Order;
