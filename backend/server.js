// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const authRoutes = require("./routes/authRoutes");

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({
//   origin: "http://localhost:5173", // frontend origin (Vite)
//   credentials: true
// }));
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);

// // DB + Server
// mongoose.connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//     app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
//   })
//   .catch(err => console.log("❌ DB Error:", err));








// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const authRoutes = require("./routes/authRoutes");
// const productRoutes = require('./routes/productRoutes');
// const cartRoutes = require('./routes/cartRoutes'); // Add this line

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', cartRoutes); // Add this line

// // Error handling middleware (add this new middleware)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     status: 'error',
//     message: 'Internal server error'
//   });
// });

// // Database connection and server start
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   })
//   .then(() => {
//     console.log("✅ MongoDB connected");
//     app.listen(process.env.PORT, () => {
//       console.log(`🚀 Server running on port ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection error", err);
//   });













// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const authRoutes = require("./routes/authRoutes");
// const productRoutes = require('./routes/productRoutes');
// const cartRoutes = require('./routes/cartRoutes'); // Add this line
// const checkoutRoutes = require('./routes/checkout');
// const orderRoutes=require('./routes/orderRoutes')
// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use('/api/products', productRoutes);
//  app.use('/api/cart', cartRoutes); // Add this line
// app.use('/api/checkout', checkoutRoutes);
// app.use('/api/orders', orderRoutes);

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("✅ MongoDB connected");
//     app.listen(process.env.PORT, () => {
//       console.log(`🚀 Server running on port ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection error", err);
//   });








import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import checkoutRoutes from './routes/checkout.js';
import orderRoutes from './routes/orderRoutes.js';
import orderConfirmationRoute from "./routes/orderConfirmationRoute.js";
// import productRoutes from './routes/productRoutes'
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/orders', orderRoutes);
app.use("/api", orderConfirmationRoute);
// app.use('/api/products', productRoutes);

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
