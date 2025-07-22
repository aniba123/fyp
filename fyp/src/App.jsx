


// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Product";
import Home from "./components/Home";
import Login from './components/Login';
import About from "./components/About";
import Footer from "./components/Footer";
import { CartProvider } from './components/CartContext';
import Shop from "./components/Shop";
import ProductDetail from './components/ProductDetail';
import CheckoutForm from "./components/CheckOutForm";
import AI from './components/AIAssistant';
// import InvoiceList from './InvoiceList';
import OrderConfirmation from './components/OrderConfirmation'
import ViewCart from "./components/ViewCart";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
function App() {

  return (
    <CartProvider>
      <Router>
          
          <Navbar />
          
        

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<h1>Cart Page</h1>} />
            {/* <Route path="/orders" element={<Invoice />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* <Route path="/invoices" element={<InvoiceList />} /> */}
            <Route path="/ai" element={<AI />} />
            {/* <Route path="/invoices/:id" element={<Invoice />} /> */}
             <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/ViewCart" element={<ViewCart />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
             <Route path="/Signup" element={<Signup/>} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Routes>
{/* <StatsSection/> */}
          <Footer />
        {/* </div> */}
      </Router>
    </CartProvider>
  );
}

export default App;