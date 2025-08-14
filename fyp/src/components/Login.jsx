

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import "./Login.css";

const Login = () => {
    const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setIsLoading(true);

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }

    );
      console.log("LOGIN RESPONSE:", response.data);

    // Save token & user data
    localStorage.setItem("token", response.data.token);
    
    // yeh line add karo — AuthContext me user set karega
    login(response.data.token, response.data.user);

    alert("Login successful!");
    navigate("/shop");
  } catch (err) {
    setError(
      err.response?.data?.message || 
      "Login failed. Please try again."
    );
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="brand-logo">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11L12 2L21 11V22H3V11Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>ShopEase</span>
        </div>
        
        <h1 className="login-title">Sign in to your account</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com" 
              required 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <div className="password-label-container">
              <label htmlFor="password">Password</label>
              <Link to="/ForgotPassword" className="forgot-password">
                Forgot password?
              </Link>
            </div>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••" 
              required 
              className="form-input"
            />
          </div>
          
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        
        <div className="signup-option">
          <p>New to ShopEase? 
            <Link to="/Signup" className="signup-link">
              Create an account
            </Link>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Login;