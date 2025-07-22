import React from "react";
import "./Product.css";

const productsData = [
  {
    id: 1,
    name: "Smart Watch",
    price: 4999,
    image: "https://via.placeholder.com/200x200?text=Watch",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 2999,
    image: "https://via.placeholder.com/200x200?text=Earbuds",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1999,
    image: "https://via.placeholder.com/200x200?text=Mouse",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 3499,
    image: "https://via.placeholder.com/200x200?text=Speaker",
  },
];

function Product() {
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // abhi sirf console me show hoga, later context ya redux use karenge
  };

  return (
    <div className="products-container">
      {productsData.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Product;
