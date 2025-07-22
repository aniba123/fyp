import { useLocation } from 'react-router-dom';
import './OrderConfirmation.css'; // Make sure to create this CSS file

function OrderConfirmation() {
  const { state: orderData } = useLocation();

  if (!orderData) {
    return (
      <div className="no-order">
        <h2>No order data found</h2>
        <p>Please complete your checkout to view order confirmation.</p>
      </div>
    );
  }

  const { customer, items, total, orderNumber, date } = orderData;
  const shipping = 5.99; // Example shipping cost
  const subtotal = total - shipping;

  // Generate Google Maps URL
  const mapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    customer.address + ', ' + customer.city + ', ' + customer.state + ' ' + customer.zipCode
  )}&output=embed`;

  return (
    <div className="order-confirmation">
      <div className="confirmation-header">
        <h1>Thank you, {customer.fullName}!</h1>
        <p className="confirmation-message">Your order is confirmed. You'll receive a confirmation email shortly.</p>
        <div className="order-meta">
          <p><strong>Order #:</strong> {orderNumber}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Contact:</strong> {customer.contactNumber}</p>
        </div>
      </div>

      <div className="confirmation-content">
        <div className="map-container">
          <h2>Shipping Information</h2>
          <div className="shipping-address">
            <p><strong>Address:</strong></p>
            <p>{customer.fullName}</p>
            <p>{customer.address}</p>
            <p>{customer.city}, {customer.state} {customer.zipCode}</p>
          </div>
          
          <h3>Delivery Location</h3>
          <div className="map-wrapper">
            <iframe
              title="Shipping Location"
              width="100%"
              height="300"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={mapsUrl}
            ></iframe>
          </div>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-details">
            <ul className="product-list">
              {items.map(item => (
                <li key={item.id} className="product-item">
                  <div className="product-info">
                    <span className="product-name">{item.name}</span>
                    <span className="product-quantity">× {item.quantity}</span>
                  </div>
                  <span className="product-price">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>$0.00</span> {/* You can add tax calculation if needed */}
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="payment-method">
            <h3>Payment Method</h3>
            <p>
              {customer.paymentMethod === 'COD' ? 'Cash on Delivery' : 
               customer.paymentMethod === 'CreditCard' ? 'Credit Card' : 'PayPal'}
            </p>
          </div>

          <div className="customer-support">
            <h3>Need Help?</h3>
            <p>Contact our customer support at support@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;