

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import FeaturedProducts from "../components/FeaturedProducts";
import axios from "axios";
import { motion } from "framer-motion";
import "./Home.css";
import StatsSection from "./StatsSection";
import FAQ from './FAQPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: !isMobile,
    pauseOnHover: true,
    fade: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    responsive: [
      {
        breakpoint: 768,
        settings: { arrows: false, dots: true },
      },
    ],
  };

  // ✅ Newsletter states + submit function yahan rakh do
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/subscribe", {
        email,
      });
      setMessage(res.data.message);
      setEmail("");
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message || "Something went wrong. Try again!"
      );
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Slider {...sliderSettings} className="hero-slider">
            <div className="hero-slide slide-fashion">
              <div className="slide-content">
                <h1>Discover the Latest Fashion Trends</h1>
                <p>Shop unique styles that reflect your individuality</p>
                <Link to="/shop">
                  <button className="shop-btn">Explore Fashion</button>
                </Link>
              </div>
            </div>
            <div className="hero-slide slide-tech">
              <div className="slide-content">
                <h1>Technology at Your Fingertips</h1>
                <p>Explore the most advanced gadgets of the year</p>
                <Link to="/shop">
                  <button className="shop-btn">Browse Tech</button>
                </Link>
              </div>
            </div>
            <div className="hero-slide slide-home">
              <div className="slide-content">
                <h1>Perfect Home Essentials</h1>
                <p>Everything you need for a beautiful and functional home</p>
                <Link to="/shop">
                  <button className="shop-btn">Shop Home</button>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* Stats & Featured */}
      <StatsSection />
      <FeaturedProducts />

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for exclusive deals and updates</p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>

          {message && <p className="newsletter-message">{message}</p>}
        </div>
      </section>

      <FAQ/>
    </div>
  );
};

export default Home;
