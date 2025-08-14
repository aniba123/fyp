
// src/components/CartContext.js
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // ✅ load from localStorage once
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    } catch {
      return [];
    }
  });

  // ✅ persist to localStorage on every change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, qty = 1) => {
    const pid = product._id || product.id; // ✅ normalize
    setCart(prev => {
      const idx = prev.findIndex(i => (i._id || i.id) === pid);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + qty };
        return copy;
      }
      // ensure we keep an id field we can use later
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(i => (i._id || i.id) !== productId));
  };

  const clearCart = () => setCart([]);

  const cartItemCount = useMemo(
    () => cart.reduce((t, i) => t + i.quantity, 0),
    [cart]
  );
  const totalPrice = useMemo(
    () => cart.reduce((t, i) => t + i.price * i.quantity, 0),
    [cart]
  );

  const value = { cart, addToCart, removeFromCart, clearCart, cartItemCount, totalPrice };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
