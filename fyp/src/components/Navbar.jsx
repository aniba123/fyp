




// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";
// import { useCart } from "./CartContext";
// import "./Navbar.css";

// function Navbar() { 
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);
//   const { cart, removeFromCart, cartItemCount, totalPrice } = useCart();

//   const handleToggle = () => {
//     setMenuOpen(!menuOpen);
//   }

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Existing navLinks array
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Shop", path: "/shop" },
//     { name: "AI Assistant", path: "/orders" },
//     { name: "About", path: "/about" },
//   ];

//   return (
//     <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="navbar-container">
//         {/* Logo */}
//         <motion.div 
//           className="logo"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Link to="/">ShopEase</Link>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <nav className="desktop-nav">
//           <ul className="nav-links">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link 
//                   to={link.path} 
//                   className="nav-link"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* User Actions - Cart icon moved here for better mobile visibility */}
//         <div className="user-actions">
//           <Link to="/login" className="account-link">
//             <FiUser className="icon" />
//             <span className="account-text">Account</span>
//           </Link>
//           <div className="cart-link" onClick={() => setCartOpen(true)}>
//             <FiShoppingCart className="icon" />
//             {cartItemCount > 0 && (
//               <span className="cart-badge">{cartItemCount}</span>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button 
//           className="mobile-menu-btn"
//           onClick={handleToggle}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div 
//             className="mobile-menu"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <ul className="mobile-nav-links">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link 
//                     to={link.path} 
//                     className="mobile-nav-link"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//               <li>
//                 <Link 
//                   to="/account" 
//                   className="mobile-nav-link"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   My Account
//                 </Link>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Cart Drawer */}
//       <AnimatePresence>
//         {cartOpen && (
//           <motion.div 
//             className="cart-drawer"
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'tween' }}
//           >
//             <div className="cart-header">
//               <h3>Your Cart ({cartItemCount})</h3>
//               <button 
//                 className="close-cart"
//                 onClick={() => setCartOpen(false)}
//               >
//                 ×
//               </button>
//             </div>
//             {cartItemCount > 0 ? (
//               <>
//                 <div className="cart-items">
//                   {cart.map((item) => (
//                     <div key={item.id} className="cart-item">
//                       <img src={item.image} alt={item.name} className="cart-item-image" />
//                       <div className="cart-item-details">
//                         <h4>{item.name}</h4>
//                         <p>${item.price.toFixed(2)} × {item.quantity}</p>
//                         <button 
//                           className="remove-item"
//                           onClick={() => removeFromCart(item.id)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="cart-summary">
//                   <div className="cart-total">
//                     <span>Total:</span>
//                     <span>${totalPrice.toFixed(2)}</span>
//                   </div>
//                   <Link 
//                     to="/checkout" 
//                     className="checkout-button"
//                     onClick={() => setCartOpen(false)}
//                   >
//                     Proceed to Checkout
//                   </Link>
//                 </div>
//               </>
//             ) : (
//               <div className="empty-cart">
//                 <p>Your cart is empty</p>
//                 <button 
//                   className="continue-shopping"
//                   onClick={() => setCartOpen(false)}
//                 >
//                   Continue Shopping
//                 </button>
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// export default Navbar;


















import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext.jsx";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
  const { cart, removeFromCart, cartItemCount, totalPrice } = useCart();

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.cart-link') && cartDropdownOpen) {
        setCartDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [cartDropdownOpen]);

  // Existing navLinks array
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "AI Assistant", path: "/ai" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">ShopEase</Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Actions */}
        <div className="user-actions">
          <Link to="/login" className="account-link">
            <FiUser className="icon" />
            <span className="account-text">Account</span>
          </Link>
          
          {/* Enhanced Cart Link with Dropdown */}
          <div 
            className="cart-link" 
            onClick={() => {
              setCartDropdownOpen(!cartDropdownOpen);
              setCartOpen(false);
            }}
          >
            <FiShoppingCart className="icon" />
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
            
            {/* Cart Dropdown */}
            <AnimatePresence>
              {cartDropdownOpen && (
                <motion.div 
                  className="cart-dropdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {cart.length > 0 ? (
                    <>
                      <div className="cart-dropdown-items">
                        {cart.slice(0, 3).map(item => (
                          <div key={item.id} className="dropdown-item">
                            <span className="dropdown-item-name">{item.name}</span>
                            <span className="dropdown-item-price">${item.price.toFixed(2)}</span>
                          </div>
                        ))}
                        {cart.length > 3 && (
                          <div className="dropdown-more">
                            +{cart.length - 3} more items
                          </div>
                        )}
                      </div>
                      <div className="dropdown-subtotal">
                        <span>Subtotal:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="dropdown-actions">
                        <Link 
                          to="/ViewCart" 
                          className="dropdown-view-cart"
                          onClick={() => setCartDropdownOpen(false)}
                        >
                          View Cart
                        </Link>
                        <Link 
                          to="/checkout" 
                          className="dropdown-checkout"
                          onClick={() => setCartDropdownOpen(false)}
                        >
                          Checkout
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="dropdown-empty">Your cart is empty</div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/account" 
                  className="mobile-nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  My Account
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer (existing) */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div 
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
          >
            <div className="cart-header">
              <h3>Your Cart ({cartItemCount})</h3>
              <button 
                className="close-cart"
                onClick={() => setCartOpen(false)}
              >
                ×
              </button>
            </div>
            {cartItemCount > 0 ? (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <p>${item.price.toFixed(2)} × {item.quantity}</p>
                        <button 
                          className="remove-item"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div className="cart-total">
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <Link 
                    to="/checkout" 
                    className="checkout-button"
                    onClick={() => setCartOpen(false)}
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </>
            ) : (
              <div className="empty-cart">
                <p>Your cart is empty</p>
                <button 
                  className="continue-shopping"
                  onClick={() => setCartOpen(false)}
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;