import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './CheckOutForm.css';

const CheckoutForm = () => {
  const { cart, totalPrice } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    contactNumber: '',
    paymentMethod: 'COD'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate random order number
    const orderNumber = Math.floor(Math.random() * 1000000);
    
    // Prepare order data
    const orderData = {
      customer: formData,
      items: cart,
      total: totalPrice,
      orderNumber,
      date: new Date().toLocaleDateString()
    };

    // Navigate to confirmation page with state
    navigate('/order-confirmation', { state: orderData });
  };

  return (
    <div className="checkout-form-container">
      <div className="checkout-form">
        <h2>Checkout</h2>
        
        <form onSubmit={handleSubmit}>
          {/* All your existing form fields remain exactly the same */}
          <div className="form-group">
            <label>Full Name*</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Shipping Address*</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Contact Number*</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="COD">Cash on Delivery</option>
              <option value="CreditCard">Credit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            {cart.map(item => (
              <div key={item.id} className="order-item">
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="order-total">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;