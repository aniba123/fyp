// // CartContext.js
// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find(item => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map(item =>
//           item.id === product.id 
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter(item => item.id !== productId));
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) {
//       removeFromCart(productId);
//       return;
//     }
//     setCart((prevCart) =>
//       prevCart.map(item =>
//         item.id === productId 
//           ? { ...item, quantity: newQuantity }
//           : item
//       )
//     );
//   };

//   const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//   return (
//     <CartContext.Provider 
//       value={{ 
//         cart, 
//         addToCart, 
//         removeFromCart, 
//         updateQuantity,
//         cartItemCount,
//         totalPrice
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);









// CartContext.js
// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find(item => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map(item =>
//           item.id === product.id 
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter(item => item.id !== productId));
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) {
//       removeFromCart(productId);
//       return;
//     }
//     setCart((prevCart) =>
//       prevCart.map(item =>
//         item.id === productId 
//           ? { ...item, quantity: newQuantity }
//           : item
//       )
//     );
//   };

//   const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//   const openCheckout = () => setIsCheckoutOpen(true);
//   const closeCheckout = () => setIsCheckoutOpen(false);

//   return (
//     <CartContext.Provider 
//       value={{ 
//         cart, 
//         addToCart, 
//         removeFromCart, 
//         updateQuantity,
//         cartItemCount,
//         totalPrice,
//         isCheckoutOpen,
//         openCheckout,
//         closeCheckout
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);




// import React from 'react';
// import { useCart } from './CartContext';
// import CheckoutForm from './CheckOutForm';

// const CartContext = () => {
//   const {
//     cart,
//     removeFromCart,
//     updateQuantity,
//     totalPrice,
//     cartItemCount,
//     isCheckoutOpen,
//     openCheckout,
//     closeCheckout
//   } = useCart();

//   return (
//     <>
//       <div className="cart-sidebar">
//         <div className="cart-header">
//           <h3>Your Cart ({cartItemCount})</h3>
//           <button className="close-cart" onClick={onClose}>×</button>
//         </div>

//         {cartItemCount > 0 ? (
//           <>
//             <div className="cart-items">
//               {cart.map((item) => (
//                 <div key={item.id} className="cart-item">
//                   <img src={item.image} alt={item.name} className="cart-item-image" />
//                   <div className="cart-item-details">
//                     <h4>{item.name}</h4>
//                     <p>${item.price.toFixed(2)}</p>
//                     <div className="quantity-controls">
//                       <button 
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                         disabled={item.quantity <= 1}
//                       >
//                         −
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
//                         +
//                       </button>
//                     </div>
//                     <button 
//                       className="remove-item"
//                       onClick={() => removeFromCart(item.id)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="cart-summary">
//               <div className="cart-total">
//                 <span>Total:</span>
//                 <span>${totalPrice.toFixed(2)}</span>
//               </div>
//               <button className="checkout-button" onClick={openCheckout}>
//                 Proceed to Checkout
//               </button>
//             </div>
//           </>
//         ) : (
//           <div className="empty-cart">
//             <p>Your cart is empty</p>
//             <button className="continue-shopping" onClick={onClose}>
//               Continue Shopping
//             </button>
//           </div>
//         )}
//       </div>

//       {isCheckoutOpen && <CheckoutForm onClose={closeCheckout} />}
//     </>
//   );
// };

// export default CartContext;














// src/components/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      cartItemCount, 
      totalPrice 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};