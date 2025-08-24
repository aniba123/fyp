import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:5000/api/contact", formData);
    alert(res.data.message || "Thank you for your message! We will get back to you soon.");
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  } catch (err) {
    console.error("❌ Error submitting form:", err);
    alert("Something went wrong. Please try again later.");
  }
};


  return (
    <div className="contact-us-container">
      {/* Header Section */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <header className="contact-header">
        <h1>We'd love to hear from you!</h1>
        <p>If you have any questions about your order, our products, or policies, feel free to reach out. Our support team is here to assist you.</p>
      </header>

      <div className="contact-content">
        {/* Contact Information */}
        <section className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-card">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-details">
                <h3>Email</h3>
                <p>support@shopease.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-details">
                <h3>Phone / WhatsApp</h3>
                <p>(+92307-6563079)</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-details">
                <h3>Business Address</h3>
                <p>Gulberg , Lahore , Pakistan</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="info-details">
                <h3>Customer Support Hours</h3>
                <p>“Our customer support agents are available 24/7 to assist you.”</p>
              </div>
            </div>
          </div>
          
          <div className="faq-link">
  <p>Looking for quick answers? Check our</p>
  <Link to="/faq">
    <button className="faq-button">FAQ Section</button>
  </Link>
</div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <h2>Send us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>
      </div>

      {/* Live Chat Button */}
     <div className="live-chat-button">
  <a 
    href="https://wa.me/923076563079"  // yaha apna WhatsApp number dalna
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="fab fa-whatsapp"></i>
  </a>
</div>

    </div>
  );
};

export default ContactUs;