import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeaturedProducts.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data.slice(0, 4));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="featured-products-container">
      <h2 className="featured-products-title">Featured Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card" tabIndex="0">
            <div className="product-image-container">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x400?text=Product+Image';
                }}
              />
            </div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">PKR {product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
            <Link to="/shop" className="view-more-btn">View More Products</Link>

      {/* <a href="/shop" className="view-more-btn">View More Products</a> */}
    </section>
  );
};

export default FeaturedProducts;