
import React, { useState, useEffect } from "react";
import anibaImg from "../assets/aniba.png";

import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  // State for our stats
  const [stats, setStats] = useState({
    customers: 0,
    products: 0,
    support: 0,
    brands: 0
  });

  // Target values for our stats
  const targetStats = {
    customers: 10,
    products: 10,
    support: 24,
    brands: 10
  };

  // Animation duration in seconds
  const duration = 2;

  // Function to animate the counting
  const animateCount = () => {
    let startTime = null;

    const animationFrame = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / (duration * 1000), 1);

      setStats({
        customers: Math.floor(progress * targetStats.customers),
        products: Math.floor(progress * targetStats.products),
        support: Math.floor(progress * targetStats.support),
        brands: Math.floor(progress * targetStats.brands)
      });

      if (progress < 1) {
        requestAnimationFrame(animationFrame);
      } else {
        // Ensure we reach the exact target values
        setStats(targetStats);
      }
    };

    requestAnimationFrame(animationFrame);
  };

  // Use Intersection Observer to trigger animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero-content">
          <h1>Our Story</h1>
          <p>Discover what makes ShopEase different</p>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.div 
        className="about-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Mission Section */}
        <section className="about-section">
          <div className="section-image">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Our Mission" />
          </div>
          <div className="section-content">
            <h2>Our Mission</h2>
            <p>
              At ShopEase, we're revolutionizing online shopping by combining cutting-edge 
              technology with exceptional customer service. We believe everyone deserves 
              access to quality products at fair prices.
            </p>
            <button className="cta-button"><a href="/contact">Learn More</a></button>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-section reverse">
          <div className="section-image">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Our Values" />
          </div>
          <div className="section-content">
            <h2>Our Values</h2>
            <ul className="values-list">
              <li>
                <span className="value-icon">✓</span>
                <span className="value-text">Customer-first approach in everything we do</span>
              </li>
              <li>
                <span className="value-icon">✓</span>
                <span className="value-text">Commitment to quality and authenticity</span>
              </li>
              <li>
                <span className="value-icon">✓</span>
                <span className="value-text">Innovation to enhance your shopping experience</span>
              </li>
              <li>
                <span className="value-icon">✓</span>
                <span className="value-text">Sustainable and ethical business practices</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Meet The Team</h2>
          <p className="team-subtitle">The passionate people behind ShopEase</p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
<img src={anibaImg} alt="Team Member" />
              </div>
              <h3>Aniba Shakeel</h3>
              <p className="position">CEO & Founder</p>
              <p className="bio">With 15 years in e-commerce, Aniba leads our vision for customer-centric shopping.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Team Member" />
              </div>
              <h3>M-Atif Cheema</h3>
              <p className="position">CTO</p>
              <p className="bio">Tech innovator building the platform that powers your shopping experience.</p>
            </div>
            
           
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stat-item">
            <h3>{stats.customers}</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>{stats.products}</h3>
            <p>Products Available</p>
          </div>
          <div className="stat-item">
            <h3>{stats.support}/7</h3>
            <p>Customer Support</p>
          </div>
          <div className="stat-item">
            <h3>{stats.brands}+</h3>
            <p>Brand Partners</p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;