// // ProductDetail.jsx
// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { useCart } from './CartContext';

// import './ProductDetail.css'; // Import your CSS file for styling



// // Product data
// const products = [

//     {
//       id: 7,
//       name: "Classic Sneakers",
//       price: 49.99,
//       image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//       category: "footwear",
//       rating: 4.5,
//       description: "Our classic sneakers combine timeless style with modern comfort technology. Made with breathable mesh and durable rubber soles.",
//       features: [
//         "Breathable mesh upper",
//         "Cushioned insole for all-day comfort",
//         "Durable rubber outsole",
//         "Available in multiple colors"
//       ],
//       brand: "ShopZone Footwear",
//       availability: "In Stock (Ships in 1-2 business days)"
//     },
//     // Add similar details for other products...
//   {
//     id: 1,
//     name: "Classic Sneakers",
//     price: 49.99,
//     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//     category: "footwear",
//     rating: 4.5
//   },
//   {
//     id: 2,
//     name: "Smartwatch Pro",
//     price: 89.99,
//     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//     category: "electronics",
//     rating: 4.2
//   },
//   {
//     id: 3,
//     name: "Wireless Headphones",
//     price: 59.99,
//     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//     category: "electronics",
//     rating: 4.7
//   },
//   {
//     id: 4,
//     name: "Leather Backpack",
//     price: 69.99,
//     image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//     category: "accessories",
//     rating: 4.3
//   },
//   {
//     id: 5,
//     name: "Cotton T-Shirt",
//     price: 24.99,
//     image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//     category: "clothing",
//     rating: 4.1
//   },
//   {
//     id: 6,
//     name: "Fitness Tracker",
//     price: 39.99,
//     image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//     category: "electronics",
//     rating: 3.9
//   },
// ];

// const ProductDetail = () => {
//   const { id } = useParams();
//   const { addToCart } = useCart();

//   // Find the product by ID (in a real app, you'd fetch this from an API)
//   const product = products.find(p => p.id === parseInt(id));

//   if (!product) {
//     return <div className="product-not-found">Product not found</div>;
//   }

//   return (
//     <motion.div
//       className="product-detail-container"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="product-detail">
//         <div className="product-image-section">
//           <img src={product.image} alt={product.name} className="detail-image" />
//         </div>
        
//         <div className="product-info-section">
//           <h1 className="product-title">{product.name}</h1>
          
//           <div className="price-rating">
//             <span className="detail-price">${product.price.toFixed(2)}</span>
//             <div className="detail-rating">
//               {[...Array(5)].map((_, i) => (
//                 <span key={i} className={i < Math.floor(product.rating) ? "star filled" : "star"}>
//                   ★
//                 </span>
//               ))}
//               <span className="rating-count">({product.rating})</span>
//             </div>
//           </div>
          
//           <div className="availability">
//             <span className="in-stock">In Stock</span>
//             <span className="brand-info">Brand: ShopZone</span>
//           </div>
          
//           <div className="product-description">
//             <h3>Description</h3>
//             <p>
//               {product.description || 
//                 `This premium ${product.name} is made with high-quality materials and designed for maximum comfort and durability. 
//                 Perfect for everyday use with its stylish design and excellent features.`}
//             </p>
//             <ul className="features-list">
//               <li>High-quality materials</li>
//               <li>Durable construction</li>
//               <li>Comfortable design</li>
//               <li>1-year manufacturer warranty</li>
//             </ul>
//           </div>
          
//           <div className="product-actions">
//             <button 
//               className="add-to-cart-btn"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//             <Link to="/shop" className="back-to-shop">
//               Back to Shop
//             </Link>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductDetail;










import React, { useState } from 'react';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProductGrid.css'
// Dummy product data with categories and prices
const products = [
  {
    id: 1,
    title: "Majestic feel for women 30ml",
    brand: "MAAZ SAFDER FRAGRANCE",
    category: "women",
    rating: 4.5,
    reviews: 128,
    price: 1999,
    image: "https://via.placeholder.com/300x300?text=Perfume+1"
  },
  {
    id: 2,
    title: "Royal Oud for men 50ml",
    brand: "MAAZ SAFDER FRAGRANCE",
    category: "men",
    rating: 5,
    reviews: 89,
    price: 2499,
    image: "https://via.placeholder.com/300x300?text=Perfume+2"
  },
  {
    id: 3,
    title: "Floral Bloom 30ml",
    brand: "MAAZ SAFDER FRAGRANCE",
    category: "women",
    rating: 4,
    reviews: 56,
    price: 1799,
    image: "https://via.placeholder.com/300x300?text=Perfume+3"
  },
  {
    id: 4,
    title: "Citrus Zest 50ml",
    brand: "MAAZ SAFDER FRAGRANCE",
    category: "unisex",
    rating: 4.7,
    reviews: 203,
    price: 2199,
    image: "https://via.placeholder.com/300x300?text=Perfume+4"
  },
  {
    id: 5,
    title: "Vanilla Dream 30ml",
    brand: "MAAZ SAFDER FRAGRANCE",
    category: "women",
    rating: 4.2,
    reviews: 74,
    price: 1899,
    image: "https://via.placeholder.com/300x300?text=Perfume+5"
  },
  {
    id: 6,
    title: "Sandalwood Serenity 50ml",
    brand: "MAAZ SAFDER FRAGRANCE",
    category: "men",
    rating: 4.8,
    reviews: 142,
    price: 2599,
    image: "https://via.placeholder.com/300x300?text=Perfume+6"
  }
];

// Extract unique categories
const categories = [...new Set(products.map(product => product.category))];

const ProductCard = ({ product }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} className="text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-brand">{product.brand}</p>
        <div className="product-rating">
          <div className="stars">
            {renderStars()}
          </div>
          <span className="review-count">({product.reviews})</span>
        </div>
        <p className="product-price">Rs. {product.price.toLocaleString()}.00 PKR</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch(sortOption) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

  return (
    <div className="product-page">
      {/* Filters Section */}
      <div className="filters-section">
        {/* Search Bar */}
        <div className="filter-group">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="filter-group">
          <label htmlFor="category" className="filter-label">Category:</label>
          <select
            id="category"
            className="filter-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Options */}
        <div className="filter-group">
          <label htmlFor="sort" className="filter-label">Sort By:</label>
          <select
            id="sort"
            className="filter-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rating</option>
            <option value="reviews">Most Reviews</option>
          </select>
        </div>

        {/* Price Range Slider */}
        <div className="filter-group">
          <label className="filter-label">Price Range:</label>
          <div className="price-range-container">
            <span className="price-range-value">Rs. {priceRange[0].toLocaleString()}</span>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              className="price-range-slider"
            />
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="price-range-slider"
            />
            <span className="price-range-value">Rs. {priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid-container">
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <p>No products match your filters. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;