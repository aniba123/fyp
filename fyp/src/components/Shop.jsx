

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';
import { useCart } from './CartContext';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';


// Styled Components
const ShopContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ShopHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const ShopTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ShopControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
`;

const SearchBar = styled.div`
  position: relative;
  flex: 1;
  min-width: 250px;

  input {
    width: 100%;
    padding: 10px 15px 10px 40px;
    border: 1px solid #ddd;
    border-radius: 25px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #3a86ff;
      box-shadow: 0 0 0 2px rgba(58, 134, 255, 0.2);
    }
  }

  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    color: #777;
  }
`;

const ShopFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
`;

const FilterGroup = styled.div`
  flex: 1;
  min-width: 150px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: #555;
    font-size: 0.9rem;
  }

  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background-color: white;
    font-size: 0.9rem;
    transition: all 0.3s ease;

    &:hover {
      border-color: #bbb;
    }

    &:focus {
      outline: none;
      border-color: #3a86ff;
      box-shadow: 0 0 0 2px rgba(58, 134, 255, 0.2);
    }
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 25px;

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
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  height: 200px;
  background-color: #f8f8f8;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProductBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
  background-color: ${props => props.type === 'new' ? '#4CAF50' : '#F44336'};
  z-index: 2;
`;

const QuickViewButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 15px;
  border: none;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 2;

  ${ProductCard}:hover & {
    opacity: 1;
    bottom: 15px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1rem;
  color: #333;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Star = styled.span`
  color: ${props => props.filled ? '#FFD700' : '#ddd'};
  font-size: 0.9rem;
  margin-right: 2px;
`;

const RatingCount = styled.span`
  margin-left: 5px;
  font-size: 0.8rem;
  color: #777;
`;

const ProductDescription = styled.p`
  color: #666;
  font-size: 0.85rem;
  line-height: 1.4;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const Price = styled.span`
  font-weight: bold;
  color: #333;
  font-size: 1.1rem;
`;

const AddToCartButton = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  background-color: #3a86ff;
  color: white;
  font-weight: 500;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2667cc;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const NoProducts = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  color: #666;
`;

const ProductDetailsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProductDetailImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f8f8f8;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ProductDetailInfo = styled.div`
  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 15px;
  }
`;

const DetailPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 15px 0;
`;

const DetailRating = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;

  .stars {
    display: flex;
    margin-right: 10px;
  }

  .rating-value {
    font-weight: 500;
    color: #555;
  }
`;

const DetailMeta = styled.div`
  margin: 20px 0;
  font-size: 0.9rem;
  color: #555;

  p {
    margin: 8px 0;
  }

  strong {
    color: #333;
    margin-right: 5px;
  }
`;

const DetailDescription = styled.div`
  margin: 20px 0;
  line-height: 1.6;
  color: #555;
`;

const DetailAddToCart = styled.button`
  padding: 12px 25px;
  background-color: #3a86ff;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 20px;

  &:hover {
    background-color: #2667cc;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(58, 134, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;


// Product Card Component
const ProductCardComponent = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <ProductCard
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/products/${product._id}`)}
    >
      <ProductImageContainer>
        <ProductImage src={product.imageUrl} alt={product.name} />
        {product.isNew && <ProductBadge type="new">NEW</ProductBadge>}
        <QuickViewButton
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/products/${product._id}`);
        }}
      >
        Quick View
      </QuickViewButton>
      </ProductImageContainer>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        {/* <ProductRating>
          {[...Array(5)].map((_, i) => (
            <Star key={i} filled={i < Math.floor(product.rating)}>
              ★
            </Star>
          ))}
          <RatingCount>({product.rating})</RatingCount>
        </ProductRating> */}
        <ProductDescription>
          {product.description || 'No description available'}
        </ProductDescription>
        <ProductPrice>
          <Price>PKR {product.price.toFixed(2)}</Price>
          <AddToCartButton
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            Add to Cart
          </AddToCartButton>
        </ProductPrice>
      </ProductInfo>
    </ProductCard>
  );
};

// Shop Component (for listing products)
const Shop = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  useEffect(() => {
    if (products.length === 0) return;
    
    let result = [...products];
    
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    if (searchQuery) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, sortOption, searchQuery, products]);

  if (loading) return <ShopContainer><p>Loading products...</p></ShopContainer>;
  if (error) return <ShopContainer><p>Error loading products: {error}</p></ShopContainer>;

  return (
    <ShopContainer>
      <ShopHeader>
        <ShopTitle>Our Products</ShopTitle>
        <ShopControls>
          <SearchBar>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SearchBar>
        </ShopControls>
      </ShopHeader>

      <ShopFilters>
        <FilterGroup>
          <label>Category:</label>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
          </select>
        </FilterGroup>

        <FilterGroup>
          <label>Sort by:</label>
          <select 
            value={sortOption} 
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </FilterGroup>
      </ShopFilters>

      <ProductsGrid>
        <AnimatePresence>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCardComponent 
                key={product._id} 
                product={product}
              />
            ))
          ) : (
            <NoProducts>
              <p>No products found matching your criteria.</p>
            </NoProducts>
          )}
        </AnimatePresence>
      </ProductsGrid>
    </ShopContainer>
  );
};

// Product Details Component
const ProductDetailsPage = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading product details...</div>;
  if (error) return <div>Error loading product: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <ProductDetailsContainer>
      <ProductDetailImage>
        <img src={product.imageUrl} alt={product.name} />
      </ProductDetailImage>
      <ProductDetailInfo>
        <h1>{product.name}</h1>
        <DetailPrice>{product.price.toFixed(2)}</DetailPrice>
       
        <DetailMeta>
          <p><strong>Availability:</strong> {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Brand:</strong> {product.brand || 'Not specified'}</p>
        </DetailMeta>
        <DetailDescription>
          <h3>Description</h3>
          <p>{product.description || 'No description available.'}</p>
        </DetailDescription>
        <DetailAddToCart onClick={() => addToCart(product)}>
          Add to Cart
        </DetailAddToCart>
      </ProductDetailInfo>
    </ProductDetailsContainer>
  );
};

// App Router Setup (should be in your main App.js)
export const ShopRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
    </Routes>
  );
};

// Default export (can be used if you want to keep everything in one file)
const ShopWithRouter = () => {
  return <ShopRoutes />;
};

export default ShopWithRouter;