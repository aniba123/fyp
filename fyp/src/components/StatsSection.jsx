import React from 'react';
import CountUp from 'react-countup';
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';
import './StatsSection.css'; // External CSS file

// Import your Lottie JSON files (replace with actual imports)
import happyAnimation from '../assets/happy.json';
import productAnimation from '../assets/product.json';
import supportAnimation from '../assets/support.json';
import brandAnimation from '../assets/brand.json';

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const statsData = [
    {
      id: 1,
      animation: happyAnimation,
      value: 10,
      suffix: '',
      title: 'Happy Customers',
      duration: 2.5,
    },
    {
      id: 2,
      animation: productAnimation,
      value: 10,
      suffix: '+',
      title: 'Products Available',
      duration: 2.5,
    },
    {
      id: 3,
      animation: supportAnimation,
      value: 24,
      suffix: '/7',
      title: 'Customer Support',
      duration: 2,
    },
    {
      id: 4,
      animation: brandAnimation,
      value: 150,
      suffix: '+',
      title: 'Brand Partners',
      duration: 2,
    },
  ];

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-container">
        <h2 className="stats-section-title">What Customers Say About Us</h2>
        <div className="stats-grid">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="animation-container">
                <Lottie
                  animationData={stat.animation}
                  loop={true}
                  autoplay={true}
                  className="lottie-animation"
                />
              </div>
              <div className="stat-content">
                <h3 className="stat-number">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={stat.duration}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  ) : (
                    '0' + stat.suffix
                  )}
                </h3>
                <p className="stat-title">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;