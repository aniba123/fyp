// Checkout.jsx
import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css'; // Assuming you have a CSS file for styling
const Checkout = () => {
  const { cart, totalPrice, cartItemCount } = useCart();

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      
      {cartItemCount > 0 ? (
        <div className="checkout-content">
          <div className="order-summary">
            <h2>Order Summary ({cartItemCount} items)</h2>
            <div className="order-items">
              {cart.map(item => (
                <div key={item.id} className="order-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)} × {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-total">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="payment-form">
            <h2>Payment Information</h2>
            <form>
              <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="form-group">
                <label>Expiration Date</label>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="text" placeholder="123" />
              </div>
              <button type="submit" className="submit-order">
                Place Order
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/shop" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;