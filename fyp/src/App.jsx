import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Product";
import Home from "./components/Home";
import Login from './components/Login';
import About from "./components/About";
import Footer from "./components/Footer";
import { CartProvider } from './components/CartContext';
import Shop from "./components/Shop";
import ProductDetail from './components/ProductDetailsPage';
import CheckoutForm from "./components/CheckOutForm";
import AI from './components/AIAssistant';
import AddProduct from './components/AddProduct';
import ChatWidget from './components/ChatWidget';
import { AuthProvider } from './components/AuthContext';
import OrderConfirmation from './components/OrderConfirmation';
import ViewCart from "./components/ViewCart";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

// 🆕 Profile page import
import Profile from "./components/Profile"; 

function App() {
  return (
          <CartProvider>

    <AuthProvider>
      {/* <CartProvider> */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<h1>Cart Page</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/ViewCart" element={<ViewCart />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />

            {/* 🆕 Profile page ka route */}
            <Route path="/profile" element={<Profile />} />
          </Routes>

          <ChatWidget /> 
          <Footer />
        </Router>
      {/* </CartProvider> */}
    </AuthProvider>
          </CartProvider>

  );
}

export default App;
