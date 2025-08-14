
import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      await axios.post(
        'http://localhost:5000/api/auth/forgot-password',
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setEmailSent(true);
    } catch (err) {
      setError(
        err.response?.data?.message || 
        'Failed to send reset link. Please try again later.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        {/* Optional logo placeholder */}
        <div className="logo-placeholder">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#4285F4">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          </svg>
        </div>

        {emailSent ? (
          <div className="success-message">
            <h2>Check your email</h2>
            <p>We've sent a password reset link to <strong>{email}</strong></p>
            <p className="small-text">Didn't receive the email? Check your spam folder or <button className="text-button" onClick={() => setEmailSent(false)}>try again</button>.</p>
            <button className="back-to-login" onClick={() => window.location.href = '/login'}>Back to Login</button>
          </div>
        ) : (
          <>
            <h2>Reset your password</h2>
            <p className="subtext">Enter the email address associated with your account. We'll send you a link to reset your password.</p>
            
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                  placeholder="Enter your email"
                />
              </div>
              
              <button type="submit" className="reset-button" disabled={isLoading}>
                {isLoading ? (
                  <span className="spinner"></span>
                ) : (
                  'Send Reset Link'
                )}
              </button>
            </form>
            
            <div className="footer-links">
              <a href="/login" className="back-link">Back to Login</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;