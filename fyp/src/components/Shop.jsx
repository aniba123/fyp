

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
//     {
//       id: 8,
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



// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useCart } from "./CartContext";
// import "./Shop.css";
// import { useNavigate } from 'react-router-dom';
// // Product data remains the same...

// const Shop = () => {
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const [filter, setFilter] = useState("all");
//   const [sort, setSort] = useState("default");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter products by category
//   const filteredProducts = products.filter(product => 
//     (filter === "all" || product.category === filter) &&
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Sort products
//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     if (sort === "price-low") return a.price - b.price;
//     if (sort === "price-high") return b.price - a.price;
//     if (sort === "rating") return b.rating - a.rating;
//     return 0;
//   });

//   return (
//     <motion.div
//       className="shop-container"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Header with search and cart */}
//       <div className="shop-header">
//         <h1 className="shop-title">Shop Products</h1>
        
//         <div className="shop-controls">
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Filters and sorting */}
//       <div className="shop-filters">
//         <div className="filter-group">
//           <label>Category:</label>
//           <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//             <option value="all">All Categories</option>
//             <option value="electronics">Electronics</option>
//             <option value="footwear">Footwear</option>
//             <option value="clothing">Clothing</option>
//             <option value="accessories">Accessories</option>
//           </select>
//         </div>

//         <div className="filter-group">
//           <label>Sort by:</label>
//           <select value={sort} onChange={(e) => setSort(e.target.value)}>
//             <option value="default">Default</option>
//             <option value="price-low">Price: Low to High</option>
//             <option value="price-high">Price: High to Low</option>
//             <option value="rating">Rating</option>
//           </select>
//         </div>
//       </div>

//       {/* Products grid */}
//       <div className="products-grid">
//         {sortedProducts.length > 0 ? (
//           sortedProducts.map((product) => (
//             <motion.div
//               key={product.id}
//               className="product-card"
//               whileHover={{ y: -5 }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="product-badge">New</div>
//               <div className="product-image-container">
//                 <img src={product.image} alt={product.name} className="product-image" />
//                 {/* <button 
//                   className="quick-view"
//                   onClick={() => console.log("Quick view", product.id)}
//                 >
//                   Quick View
//                 </button> */}


// {/* // Update the Quick View button: */}
//   <button 
//     className="quick-view"
//     onClick={() => navigate(`/product/${product.id}`)}
//   >
//     Quick View
//   </button>
//               </div>
//               <div className="product-info">
//                 <h3 className="product-name">{product.name}</h3>
//                 <div className="product-rating">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className={i < Math.floor(product.rating) ? "star filled" : "star"}>
//                       ★
//                     </span>
//                   ))}
//                   <span className="rating-count">({product.rating})</span>
//                 </div>

//           {/* // Update the product price rendering to be more defensive: */}
// <p className="product-price">
//   {product?.price ? `$${product.price.toFixed(2)}` : 'Price not available'}
// </p>
//                 {/* <p className="product-price">${product.price.toFixed(2)}</p> */}
//                {/* // Update the Add to Cart button to check for product existence: */}
// <button 
//   className="add-to-cart"
//   onClick={() => product && addToCart(product)}
//   disabled={!product}
// >
//   Add to Cart
// </button>
//               </div>
//             </motion.div>
//           ))
//         ) : (
//           <div className="no-products">
//             <p>No products found matching your criteria.</p>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default Shop;



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';
import { useCart } from './CartContext.jsx'; // or the correct path to your CartContext
// Sample product data
// const productsData = [
//   {
//     id: 1,
//     name: 'Wireless Bluetooth Headphones',
//     price: 89.99,
//     category: 'electronics',
//     rating: 4.5,
//     image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoaW5nfGVufDB8fDB8fHww',
//     description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
//     isNew: true,
//     isSale: false,
//   },
//   {
//     id: 2,
//     name: 'Organic Cotton T-Shirt',
//     price: 24.99,
//     category: 'clothing',
//     rating: 4.2,
//     image: 'https://plus.unsplash.com/premium_photo-1673125510222-1a51e3a8ccb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoaW5nfGVufDB8fDB8fHww',
//     description: 'Soft organic cotton t-shirt available in multiple colors.',
//     isNew: false,
//     isSale: true,
//     salePrice: 19.99,
//   },
//   {
//     id: 3,
//     name: 'Stainless Steel Water Bottle',
//     price: 29.99,
//     category: 'accessories',
//     rating: 4.7,
//     image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fDB8fHww',
//     description: 'Insulated stainless steel bottle that keeps drinks cold for 24 hours.',
//     isNew: true,
//     isSale: false,
//   },
//   {
//     id: 4,
//     name: 'Smart Fitness Tracker',
//     price: 59.99,
//     category: 'electronics',
//     rating: 4.3,
//     image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D',
//     description: 'Track your steps, heart rate, and sleep patterns with this sleek device.',
//     isNew: false,
//     isSale: true,
//     salePrice: 49.99,
//   },
//   {
//     id: 5,
//     name: 'Leather Wallet',
//     price: 45.00,
//     category: 'accessories',
//     rating: 4.4,
//     image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D',
//     description: 'Genuine leather wallet with RFID protection and multiple card slots.',
//     isNew: false,
//     isSale: false,
//   },
//   {
//     id: 6,
//     name: 'Wireless Charging Pad',
//     price: 34.99,
//     category: 'electronics',
//     rating: 4.1,
//     image: 'https://media.istockphoto.com/id/2155795543/photo/a-back-view-of-a-woman-holding-shopping-bags-in-front-of-a-store-window.webp?a=1&b=1&s=612x612&w=0&k=20&c=QD70C6WlRMfOOxeihj4nJE3Ucg2eyFRqaiWAxCdY9hg=',
//     description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
//     isNew: false,
//     isSale: false,
//   },
//   {
//     id: 7,
//     name: 'Yoga Mat',
//     price: 39.99,
//     category: 'fitness',
//     rating: 4.6,
//     image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww',
//     description: 'Eco-friendly yoga mat with superior grip and cushioning.',
//     isNew: true,
//     isSale: false,
//   },
//   {
//     id: 8,
//     name: 'Ceramic Coffee Mug',
//     price: 18.99,
//     category: 'home',
//     rating: 4.0,
//     image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww',
//     description: 'Handcrafted ceramic mug with comfortable handle and elegant design.',
//     isNew: false,
//     isSale: true,
//     salePrice: 14.99,
//   },

// ];

const categories = ['all', 'Women', 'Men', 'Electronics', 'Accessories']; // Updated categories to match your API
const sortOptions = [
  { value: 'default', label: 'Default' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

// Styled components
const ShopContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
  align-items: center;
`;

const FilterGroup = styled.div`
  position: relative;
  min-width: 200px;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #999;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 250px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover, &:focus {
    border-color: #999;
    outline: none;
  }
`;

const PriceRangeContainer = styled.div`
  flex: 1;
  min-width: 250px;
`;

const PriceRangeInput = styled.input`
  width: 100%;
  margin-top: 5px;
`;

const PriceRangeValues = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 0.9em;
  color: #666;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductCard = styled(motion.div)`
  position: relative;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
`;

const ProductImage = styled.div`
  position: relative;
  height: 200px;
  background-color: #f5f5f5;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const ProductBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: bold;
  color: white;
  background-color: ${props => props.type === 'new' ? '#4CAF50' : '#F44336'};
`;


const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductName = styled.h3`
  margin: 0 0 5px 0;
  font-size: 1em;
  color: #333;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const CurrentPrice = styled.span`
  font-weight: bold;
  color: #333;
`;

const OriginalPrice = styled.span`
  margin-left: 8px;
  font-size: 0.9em;
  text-decoration: line-through;
  color: #999;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Star = styled.span`
  color: ${props => props.filled ? '#FFD700' : '#ddd'};
  margin-right: 2px;
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: none;
  border: none;
  font-size: 1.2em;
  color: ${props => props.favorite ? '#F44336' : 'rgba(255, 255, 255, 0.7)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #F44336;
    transform: scale(1.1);
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ModalImage = styled.div`
  flex: 1;
  min-height: 300px;
  background-color: #f5f5f5;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const ModalDetails = styled.div`
  flex: 1;
`;

const ModalTitle = styled.h2`
  margin-top: 0;
  color: #333;
`;

const ModalPrice = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

const ModalRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ModalDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;


const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #666;
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 30px auto 0;
  padding: 12px 25px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555;
  transform: translateY(-2px);
  }
`;

// Add these new styled components (place with your other styled components)
const HoverButtons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 15px;
`;
const ActionButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
  width: 140px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.9rem;
    width: 120px;
  }
`;
const QuickViewButton = styled(ActionButton)`
   position: absolute;
   bottom: 20px;
   left: 50%;
   transform: translateX(-50%);
   padding: 8px 15px;
   border: none;
   border-radius: 4px;
   background-color: rgba(0, 0, 0, 0.7);
   color: white;
   font-weight: 600;
   cursor: pointer;
   opacity: 0;
   transition: all 0.3s ease;

   &:hover {
     background-color: rgba(0, 0, 0, 0.9);
   }
`;
const AddToCartButton = styled(ActionButton)`
  background-color: #3a86ff;
  color: white;

  &:hover {
    transform: translateY(-2px);
    background-color: #2667cc;
  }
`;


// Components
const ProductCardComponent = ({ product, onQuickView, onToggleFavorite, favorites }) => {
  const isFavorite = favorites.includes(product.id);
  const { addToCart } = useCart(); // Add this line

  return (
    <ProductCard
      whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ProductImage image={product.image}>
        {product.isNew && <ProductBadge type="new">NEW</ProductBadge>}
        {product.isSale && <ProductBadge type="sale">SALE</ProductBadge>}
        <FavoriteButton 
          favorite={isFavorite} 
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product.id);
          }}
        >
          {isFavorite ? '♥' : '♡'}
        </FavoriteButton>
        <QuickViewButton
          whileHover={{ scale: 1.05 }}
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
        >
          Quick View
        </QuickViewButton>

        <AddToCartButton 
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product); // This will update the cart count
            }}
          >
            Add to Cart
          </AddToCartButton>


      </ProductImage>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>
          <CurrentPrice>${product.isSale ? product.salePrice : product.price}</CurrentPrice>
          {product.isSale && <OriginalPrice>${product.price}</OriginalPrice>}
        </ProductPrice>
        <ProductRating>
          {[...Array(5)].map((_, i) => (
            <Star key={i} filled={i < Math.floor(product.rating)}>
              {i < Math.floor(product.rating) ? '★' : '☆'}
            </Star>
          ))}
          <span>({product.rating})</span>
        </ProductRating>
      </ProductInfo>
    </ProductCard>
  );
};

const QuickViewModal = ({ product, onClose, onAddToCart }) => {
  return (
    // <ModalOverlay
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   onClick={onClose}
    // >
    //   <ModalContent
    //     initial={{ scale: 0.9 }}
    //     animate={{ scale: 1 }}
    //     exit={{ scale: 0.9 }}
    //     onClick={(e) => e.stopPropagation()}
    //   >
    //     <CloseButton onClick={onClose}>×</CloseButton>
    //     <ModalImage image={product.image} />
    //     <ModalDetails>
    //       <ModalTitle>{product.name}</ModalTitle>
    //       <ModalPrice>
    //         ${product.isSale ? product.salePrice : product.price}
    //         {product.isSale && <span style={{ textDecoration: 'line-through', color: '#999', marginLeft: '10px', fontSize: '0.8em' }}>
    //           ${product.price}
    //         </span>}
    //       </ModalPrice>
    //       <ModalRating>
    //         {[...Array(5)].map((_, i) => (
    //           <Star key={i} filled={i < Math.floor(product.rating)}>
    //             {i < Math.floor(product.rating) ? '★' : '☆'}
    //           </Star>
    //         ))}
    //         <span style={{ marginLeft: '5px' }}>{product.rating} out of 5</span>
    //       </ModalRating>
    //       <ModalDescription>{product.description}</ModalDescription>
    //       <AddToCartButton onClick={() => {
    //         onAddToCart(product);
    //         onClose();
    //       }}>
    //         Add to Cart
    //       </AddToCartButton>
    //     </ModalDetails>
    //   </ModalContent>
    // </ModalOverlay>

    <ModalDetails>
  <ModalTitle>{product.name}</ModalTitle>
  
  {/* 🆕 Show Category */}
  <p style={{ marginBottom: '8px', color: '#555', fontSize: '14px' }}>
    <strong>Category:</strong> {product.category}
  </p>

  <ModalPrice>
    ${product.isSale ? product.salePrice : product.price}
    {product.isSale && (
      <span style={{
        textDecoration: 'line-through',
        color: '#999',
        marginLeft: '10px',
        fontSize: '0.8em'
      }}>
        ${product.price}
      </span>
    )}
  </ModalPrice>

  <ModalRating>
    {[...Array(5)].map((_, i) => (
      <Star key={i} filled={i < Math.floor(product.rating)}>
        {i < Math.floor(product.rating) ? '★' : '☆'}
      </Star>
    ))}
    <span style={{ marginLeft: '5px' }}>{product.rating} out of 5</span>
  </ModalRating>

  <ModalDescription>{product.description}</ModalDescription>

  <AddToCartButton onClick={() => {
    onAddToCart(product);
    onClose();
  }}>
    Add to Cart
  </AddToCartButton>
</ModalDetails>

  );
};

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   // Filter and sort products
//   useEffect(() => {
//     let result = [...products];
    
//     // Filter by category
//     if (selectedCategory !== 'all') {
//       result = result.filter(product => product.category === selectedCategory);
//     }
    
//     // Filter by search query
//     if (searchQuery) {
//       result = result.filter(product => 
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
    
//     // Filter by price range
//     result = result.filter(product => {
//       const price = product.isSale ? product.salePrice : product.price;
//       return price >= priceRange[0] && price <= priceRange[1];
//     });
    
//     // Sort products
//     switch (sortOption) {
//       case 'price-asc':
//         result.sort((a, b) => (a.isSale ? a.salePrice : a.price) - (b.isSale ? b.salePrice : b.price));
//         break;
//       case 'price-desc':
//         result.sort((a, b) => (b.isSale ? b.salePrice : b.price) - (a.isSale ? a.salePrice : a.price));
//         break;
//       case 'rating':
//         result.sort((a, b) => b.rating - a.rating);
//         break;
//       case 'newest':
//         result.sort((a, b) => {
//           if (a.isNew && !b.isNew) return -1;
//           if (!a.isNew && b.isNew) return 1;
//           return 0;
//         });
//         break;
//       default:
//         // Default sorting (original order)
//         break;
//     }
    
//     setFilteredProducts(result);
//     setVisibleProducts(8); // Reset visible products when filters change
//   }, [selectedCategory, sortOption, searchQuery, priceRange, products]);

//   const handleToggleFavorite = (productId) => {
//     setFavorites(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId) 
//         : [...prev, productId]
//     );
//   };

//   const handleAddToCart = (product) => {
//     // In a real app, you would add to cart state or make an API call
//     alert(`${product.name} added to cart!`);
//   };

//   const loadMoreProducts = () => {
//     setVisibleProducts(prev => prev + 4);
//   };

//   // Calculate max price for the range slider
//   const maxPrice = Math.max(...products.map(p => p.isSale ? p.salePrice : p.price));

//   return (
//     <ShopContainer>
//       <h1>Our Products</h1>
      
//       <FiltersContainer>
//         <FilterGroup>
//           <FilterLabel>Category</FilterLabel>
//           <FilterSelect 
//             value={selectedCategory} 
//             onChange={(e) => setSelectedCategory(e.target.value)}
//           >
//             {categories.map(category => (
//               <option key={category} value={category}>
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </option>
//             ))}
//           </FilterSelect>
//         </FilterGroup>
        
//         <FilterGroup>
//           <FilterLabel>Sort By</FilterLabel>
//           <FilterSelect 
//             value={sortOption} 
//             onChange={(e) => setSortOption(e.target.value)}
//           >
//             {sortOptions.map(option => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </FilterSelect>
//         </FilterGroup>
        
//         <FilterGroup style={{ flex: 2 }}>
//           <FilterLabel>Search</FilterLabel>
//           <SearchInput 
//             type="text" 
//             placeholder="Search products..." 
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </FilterGroup>
        
//         <PriceRangeContainer>
//           <FilterLabel>Price Range: ${priceRange[0]} - ${priceRange[1]}</FilterLabel>
//           <div style={{ display: 'flex', gap: '10px' }}>
//             <PriceRangeInput
//               type="range"
//               min="0"
//               max={maxPrice}
//               value={priceRange[0]}
//               onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
//             />
//             <PriceRangeInput
//               type="range"
//               min="0"
//               max={maxPrice}
//               value={priceRange[1]}
//               onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//             />
//           </div>
//           <PriceRangeValues>
//             <span>$0</span>
//             <span>${maxPrice}</span>
//           </PriceRangeValues>
//         </PriceRangeContainer>
//       </FiltersContainer>
      
//       <ProductsGrid>
//         <AnimatePresence>
//           {filteredProducts.slice(0, visibleProducts).map(product => (
//             <ProductCardComponent
//               key={product.id}
//               product={product}
//               onQuickView={setQuickViewProduct}
//               onToggleFavorite={handleToggleFavorite}
//               favorites={favorites}
//             />
//           ))}
//         </AnimatePresence>
//       </ProductsGrid>
      
//       {visibleProducts < filteredProducts.length && (
//         <LoadMoreButton onClick={loadMoreProducts}>
//           Load More
//         </LoadMoreButton>
//       )}
      
//       <AnimatePresence>
//         {quickViewProduct && (
//           <QuickViewModal
//             product={quickViewProduct}
//             onClose={() => setQuickViewProduct(null)}
//             onAddToCart={handleAddToCart}
//           />
//         )}
//       </AnimatePresence>
//     </ShopContainer>
//   );
// };





// Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
        
        // Calculate max price for the range slider
        const maxPrice = Math.max(...response.data.map(p => p.price), 0);
        setPriceRange([0, maxPrice]);
      } catch (err) {
        setError(err.message);
      }
      finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  useEffect(() => {
    if (products.length === 0) return;
    
    let result = [...products];
     // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // Filter by price range
    result = result.filter(product => {
      return product.price >= priceRange[0] && product.price <= priceRange[1];
    });
    
    // Sort products
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Assuming newer products have higher _id values (MongoDB ObjectId)
        result.sort((a, b) => a._id < b._id ? 1 : -1);
        break;
      default:
        // Default sorting (original order)
        break;
    }
    
    setFilteredProducts(result);
    setVisibleProducts(8); // Reset visible products when filters change
  }, [selectedCategory, sortOption, searchQuery, priceRange, products]);

  const handleToggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
    };

  const handleAddToCart = (product) => {
    // In a real app, you would add to cart state or make an API call
    alert(`${product.name} added to cart!`);
  };

  const loadMoreProducts = () => {
    setVisibleProducts(prev => prev + 4);
  };

  // Calculate max price for the range slider
  const maxPrice = Math.max(...products.map(p => p.price), 0);

  if (loading) return <ShopContainer><p>Loading products...</p></ShopContainer>;
  if (error) return <ShopContainer><p>Error loading products: {error}</p></ShopContainer>;
  return (
    <ShopContainer>
      <h1>Our Products</h1>
      
      <FiltersContainer>
        <FilterGroup>
          <FilterLabel>Category</FilterLabel>
          <FilterSelect 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
            </FilterSelect>
        </FilterGroup>
        
        <FilterGroup>
          <FilterLabel>Sort By</FilterLabel>
          <FilterSelect 
            value={sortOption} 
            onChange={(e) => setSortOption(e.target.value)}
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>
        <FilterGroup style={{ flex: 2 }}>
          <FilterLabel>Search</FilterLabel>
          <SearchInput 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </FilterGroup>
        
        <PriceRangeContainer>
          <FilterLabel>Price Range: ${priceRange[0]} - ${priceRange[1]}</FilterLabel>
          <div style={{ display: 'flex', gap: '10px' }}>
            <PriceRangeInput
              type="range"
              min="0"
               max={maxPrice}
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
            />
            <PriceRangeInput
              type="range"
              min="0"
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            />
          </div>
          <PriceRangeValues>
            <span>$0</span>
            <span>${maxPrice}</span>
          </PriceRangeValues>
        </PriceRangeContainer>
        </FiltersContainer>
      
      <ProductsGrid>
        <AnimatePresence>
          {filteredProducts.slice(0, visibleProducts).map(product => (
            <ProductCardComponent
              key={product._id}
              product={product}
              onQuickView={setQuickViewProduct}
              onToggleFavorite={handleToggleFavorite}
              favorites={favorites}
            />
          ))}
        </AnimatePresence>
      </ProductsGrid>
       {visibleProducts < filteredProducts.length && (
        <LoadMoreButton onClick={loadMoreProducts}>
          Load More
        </LoadMoreButton>
      )}
      
      <AnimatePresence>
        {quickViewProduct && (
          <QuickViewModal
            product={quickViewProduct}
            onClose={() => setQuickViewProduct(null)}
            onAddToCart={handleAddToCart}
          />
        )}
      </AnimatePresence>
       </ShopContainer>
  );
};

export default Shop;
