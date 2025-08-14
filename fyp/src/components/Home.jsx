
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link} from "react-router-dom";
import { FiMessageSquare } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { FiUsers, FiClock, FiStar, FiTruck } from "react-icons/fi";
import "./Home.css";
import StatsSection from "./StatsSection";




// Slick Slider styles
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


    // Navigation handlers
 
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
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };


  // Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
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
                <Link to="/products?category=electronics">
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

      {/* Rest of your components... */}

<StatsSection/>

 <section className="featured-section">
        <div className="section-container">
          {/* AI Shopping Assistant Banner */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="ai-assistant-banner"
          >
            <motion.div variants={itemVariants} className="ai-banner-content">
              <div className="ai-banner-text">
                <h2>Not sure what to buy?</h2>
                <p>Let our AI help you find the perfect products!</p>
                {/* <button className="ai-chat-button">
                  <FiMessageSquare className="button-icon" />
                  Start Chat Now
                </button> */}
                <Link to="/ai" className="ai-chat-button">
  <FiMessageSquare className="button-icon" />
  Start Chat Now
</Link>
              </div>
              <motion.div 
                variants={itemVariants}
                className="ai-banner-image"
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="ai-robot-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a2 2 0 012 2v1h1a2 2 0 012 2v2a2 2 0 01-2 2h-1v1a4 4 0 01-4 4H9a4 4 0 01-4-4v-1H4a2 2 0 01-2-2V7a2 2 0 012-2h1V4a2 2 0 012-2h5zm-3 8a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2zm-6 5a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Promo Offer Banner */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="promo-banner"
          >
            <div className="promo-content">
              <div className="promo-text">
                <span className="promo-badge">Limited Time</span>
                <h2>💥 Flat 50% Off on Summer Collection</h2>
                <p>Hurry! Offer ends soon</p>
                {/* <button className="promo-button">
                  <FiShoppingBag className="button-icon" />
                  Shop Now
                </button> */}
                {/* For Shop Now button */}
<Link to="/shop" className="promo-button">
  <FiShoppingBag className="button-icon" />
  Shop Now
</Link>
              </div>
              <div className="promo-image">
                <div className="sun-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for exclusive deals and updates</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};








export default Home;
