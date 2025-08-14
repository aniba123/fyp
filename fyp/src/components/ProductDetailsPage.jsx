

// ProductDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from './CartContext';
import styled from 'styled-components';

// ======================
// STYLED COMPONENTS
// ======================
const ProductDetailsContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
  }
`;

const ProductDetailImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f8f8f8;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ProductDetailInfo = styled.div`
  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
    font-weight: 700;
  }
`;

const DetailPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #3a86ff;
  margin: 1.5rem 0;
`;

const DetailRating = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  gap: 0.5rem;

  .stars {
    display: flex;
  }

  .rating-value {
    font-weight: 500;
    color: #555;
    font-size: 0.9rem;
  }
`;

const Star = styled.span`
  color: ${props => props.filled ? '#FFD700' : '#ddd'};
  font-size: 1.2rem;
`;

const DetailMeta = styled.div`
  margin: 1.5rem 0;
  font-size: 0.95rem;
  color: #555;
  display: grid;
  gap: 0.8rem;

  p {
    margin: 0;
    display: flex;
    align-items: center;
  }

  strong {
    color: #333;
    font-weight: 600;
    min-width: 100px;
    display: inline-block;
  }
`;

const DetailDescription = styled.div`
  margin: 2rem 0;
  line-height: 1.6;
  color: #555;

  h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.8rem;
    font-weight: 600;
  }

  p {
    margin: 0;
  }
`;

const DetailAddToCart = styled.button`
  padding: 0.8rem 1.8rem;
  background-color: #3a86ff;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1.5rem;
  width: 100%;
  max-width: 300px;

  &:hover {
    background-color: #2667cc;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(58, 134, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 1.2rem;
  color: #666;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 1.2rem;
  color: #f44336;
`;

// ======================
// COMPONENT
// ======================
const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <LoadingContainer>Loading product details...</LoadingContainer>;
  if (error) return <ErrorContainer>Error: {error}</ErrorContainer>;
  if (!product) return <ErrorContainer>Product not found</ErrorContainer>;

  return (
    <ProductDetailsContainer>
      <ProductDetailImage>
        <img src={product.imageUrl} alt={product.name} />
      </ProductDetailImage>
      
      <ProductDetailInfo>
        <h1>{product.name}</h1>
        <DetailPrice>${product.price.toFixed(2)}</DetailPrice>
        
        {/* <DetailRating>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} filled={i < Math.floor(product.rating)}>★</Star>
            ))}
          </div>
          <span className="rating-value">{product.rating} out of 5</span>
        </DetailRating> */}
        
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

export default ProductDetailsPage;