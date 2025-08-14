// Updated ViewCart.jsx with className references
import { useCart } from "../components/CartContext";
import { Link } from "react-router-dom";
import "./ViewCart.css"; // Import the CSS file

export default function ViewCart() {
  const { cart, removeFromCart, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        <p className="empty-cart">Cart is empty.</p>
        <Link to="/shop" className="continue-shopping">Continue Shopping →</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cart.map(item => {
        const key = item._id || item.id;
        return (
          <div key={key} className="cart-item">
            <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4 className="cart-item-name">{item.name}</h4>
              <div className="cart-item-quantity">Qty: {item.quantity}</div>
              <div className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
            <button className="remove-item-btn" onClick={() => removeFromCart(key)}>Remove</button>
          </div>
        );
      })}

      <div className="cart-summary">
        <strong className="cart-subtotal">Subtotal: ${totalPrice.toFixed(2)}</strong>
        <div className="cart-actions">
          <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
          <Link to="/checkout">
            <button className="checkout-btn">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}