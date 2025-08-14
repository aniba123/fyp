
import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './CheckOutForm.css';
import axios from 'axios';

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
    paymentMethod: 'Cash on Delivery',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  const orderNumber = Math.floor(Math.random() * 1000000);

  const orderData = {
    customer: {
      name: formData.fullName,
      email: formData.email,
      address: formData.address,
      phone: formData.contactNumber,
    },
    items: cart.map(item => ({
      productId: item._id || item.productId || "", // fallback in case _id missing
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
    total: totalPrice,
    orderNumber,
    date: new Date().toLocaleDateString(),
  };

  console.log("Sending order data:", orderData);

  try {
    const response = await axios.post(
      // "http://localhost:5000/api/orders",
        "http://localhost:5000/api/confirm-order",  

      orderData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );



    if (response.data.message.includes("Order placed")) {
  navigate("/order-confirmation", { state: orderData });
}

  } catch (error) {
    console.error("Order failed:", error);
    alert("Order failed. Please try again.");
  }
};


  return (
    <div className="checkout-form-container">
      <div className="checkout-form">
        <h2>Checkout</h2>
        
        <form onSubmit={handleSubmit}>
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

          {/* Updated Payment Method Section */}
          <div className="form-group">
            <label>Payment Method*</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="JazzCash">JazzCash</option>
              <option value="Payoneer">Payoneer</option>
            </select>
          </div>

          {/* Card Details Section - Only shown when JazzCash or Payoneer is selected */}
          {(formData.paymentMethod === 'JazzCash' || formData.paymentMethod === 'Payoneer') && (
            <div className="card-details">
              <div className="form-group">
                <label>Card Number*</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  required={formData.paymentMethod !== 'Cash on Delivery'}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date (MM/YY)*</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    required={formData.paymentMethod !== 'Cash on Delivery'}
                  />
                </div>

                <div className="form-group">
                  <label>CVV*</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    required={formData.paymentMethod !== 'Cash on Delivery'}
                  />
                </div>
              </div>
            </div>
          )}

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