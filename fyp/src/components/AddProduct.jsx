


/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./AddProduct.css";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    category: "",
  });

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      alert("❌ Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle Add/Update Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEditing
      ? `http://localhost:5000/api/products/updateByName/${currentProduct.name}`
      : "http://localhost:5000/api/products/add";

    const method = isEditing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentProduct),
      });

      if (res.ok) {
        alert(isEditing ? "✏️ Product updated!" : "✅ Product added!");
        fetchProducts();
        setModalOpen(false);
      } else {
        alert("❌ Failed to save product");
      }
    } catch (err) {
      alert("❌ Server error");
    }
  };

  // Delete Product
  const handleDelete = async (name) => {
    if (!window.confirm(`Delete "${name}"?`)) return;
    try {
      const res = await fetch(
        `http://localhost:5000/api/products/deleteByName/${name}`,
        { method: "DELETE" }
      );
      if (res.ok) {
        alert("🗑️ Product deleted");
        fetchProducts();
      } else {
        alert("❌ Failed to delete");
      }
    } catch (err) {
      alert("❌ Server error");
    }
  };

  return (
    <div className="admin-container">
      <h2 className="dashboard-title">📦 Admin Dashboard</h2>
      <div className="table-header">
        <h4>Products ({products.length})</h4>
        <button
          className="btn btn-primary"
          onClick={() => {
            setIsEditing(false);
            setCurrentProduct({
              name: "",
              description: "",
              price: "",
              imageUrl: "",
              category: "",
            });
            setModalOpen(true);
          }}
        >
          + Create Product
        </button>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price ($)</th>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, idx) => (
            <tr key={idx}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.price}</td>
              <td>
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  style={{ width: "50px", borderRadius: "5px" }}
                />
              </td>
              <td>{p.description}</td>
              <td>
                <button
                  className="btn-edit"
                  onClick={() => {
                    setIsEditing(true);
                    setCurrentProduct(p);
                    setModalOpen(true);
                  }}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(p.name)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>{isEditing ? "Update Product" : "Add Product"}</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={currentProduct.name}
                onChange={(e) =>
                  setCurrentProduct({ ...currentProduct, name: e.target.value })
                }
                required
                disabled={isEditing}
              />
              <input
                type="text"
                placeholder="Category"
                value={currentProduct.category}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    category: e.target.value,
                  })
                }
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={currentProduct.price}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    price: e.target.value,
                  })
                }
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={currentProduct.imageUrl}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    imageUrl: e.target.value,
                  })
                }
              />
              <textarea
                placeholder="Description"
                value={currentProduct.description}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    description: e.target.value,
                  })
                }
              />
              <div className="modal-actions">
                <button type="submit" className="btn btn-success">
                  {isEditing ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
