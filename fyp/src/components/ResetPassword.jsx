import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';  // 🔹 Step 1: Import useParams


import axios from 'axios';
import './ResetPassword.css';

const ResetPassword = () => {
  // const [searchParams] = useSearchParams();
  const { token } = useParams();  // 🔹 Step 2: Get token from URL

  // const token = searchParams.get('token');
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.newPassword) {
      newErrors.newPassword = 'Password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    
    if (!validateForm()) return;
    if (!token) {
      setApiError('Invalid reset link. Please request a new password reset.');
      return;
    }

    setIsSubmitting(true);

   try {
  await axios.post(
    `http://localhost:5000/api/auth/reset-password/${token}`, // ✅ token in URL
    {
      newPassword: formData.newPassword, // ✅ only send password in body
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  alert('Password reset successfully! Please login with your new password.');
  navigate('/login');
 } 
// catch (error) {
//   console.error(error);
//   alert(error.response?.data?.message || 'Something went wrong');
// }

    catch (err) {
      setApiError(
        err.response?.data?.message || 
        'Password reset failed. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-card">
        <div className="brand">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#4285F4">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          </svg>
          <h1>ShopEase</h1>
        </div>

        <h2>Reset Your Password</h2>
        <p className="subtext">Enter your new password below</p>

        {apiError && <div className="api-error">{apiError}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter new password"
              required
              minLength="8"
              className={errors.newPassword ? 'error' : ''}
            />
            {errors.newPassword && (
              <span className="error-message">{errors.newPassword}</span>
            )}
            <div className="password-hint">Use at least 8 characters</div>
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              required
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <button type="submit" className="reset-button" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="spinner"></span>
            ) : (
              'Reset Password'
            )}
          </button>
        </form>

        <div className="footer-links">
          <a href="/login" className="back-link">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;