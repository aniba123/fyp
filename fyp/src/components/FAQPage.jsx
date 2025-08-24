import React, { useState } from 'react';
import './FAQPage.css';

const FAQPage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept Cash on Delivery, JazzCash, and credit card payments. All transactions are processed securely through encrypted channels to ensure your safety."
    },
    {
      question: "How long will my delivery take?",
      answer: "Standard delivery takes 3-5 business days."
    },
    {
      question: "Do you offer international shipping?",
      answer:"Currently, we only ship within Pakistan. International shipping will be available in the future. For accurate details, please use our shipping calculator at checkout."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Orders can be modified or cancelled within 1 hour of placement. After this window, orders enter our processing system and cannot be changed. Please contact customer service immediately if you need assistance."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a confirmation email with a tracking number and link. You can also track your order through your account dashboard on our website."
    }
  ];

  return (
    <div className="faq-container">
      {/* Header */}
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our services and policies</p>
      </div>

      {/* FAQs Section */}
      <section className="faq-section">
        <h2>General Questions</h2>
        <div className="accordion-container">
          {faqData.map((faq, index) => (
            <div key={index} className="accordion-item">
              <button
                className={`accordion-button ${openAccordion === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="accordion-icon">{openAccordion === index ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default FAQPage;