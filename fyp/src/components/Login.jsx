
// import React from "react";
// import { Link} from "react-router-dom";

// import "./Login.css";

// const Login = () => {
//   return (
//     <div className="login-container">
//       <div className="login-card">
//         {/* Logo/Brand placeholder - replace with your actual logo */}
//         <div className="brand-logo">
//           <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M3 11L12 2L21 11V22H3V11Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             <path d="M9 22V12H15V22" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//           <span>ShopEase</span>
//         </div>
        
//         <h1 className="login-title">Sign in to your account</h1>
        
//         <form className="login-form">
//           <div className="form-group">
//             <label htmlFor="email">Email address</label>
//             <input 
//               type="email" 
//               id="email" 
//               placeholder="your@email.com" 
//               required 
//               className="form-input"
//             />
//           </div>
          
//           <div className="form-group">
//             <div className="password-label-container">
//               <label htmlFor="password">Password</label>
//               <Link to="/ForgotPassword" className="forgot-password">
//                   Forgot password?
//                 </Link>
//               {/* <a href="#" className="forgot-password">Forgot password?</a> */}
//             </div>
//             <input 
//               type="password" 
//               id="password" 
//               placeholder="••••••••" 
//               required 
//               className="form-input"
//             />
//           </div>
          
//           <button type="submit" className="login-button">
//             Sign in
//           </button>
//         </form>
        
//         <div className="signup-option">
//           <p>New to ShopEase? 
//             {/* <a href="#" className="signup-link">Create an account</a> */}
//             <Link to="/Signup" className="signup-link">
//                   Create an account
//                 </Link>
//             </p>
//         </div>
        
//         <div className="social-login">
//           <p className="divider">or continue with</p>
//           <div className="social-icons">
//             <button type="button" className="social-button">
//               <svg viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.786-1.666-4.167-2.682-6.735-2.682-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.524 10-10 0-0.67-0.069-1.325-0.189-1.955h-9.811z"/>
//               </svg>
//             </button>
//             <button type="button" className="social-button">
//               <svg viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
//               </svg>
//             </button>
//             <button type="button" className="social-button">
//               <svg viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;








import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
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

      // Save token to localStorage
      localStorage.setItem("token", response.data.token);
      
      // Show success message and redirect
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
        
        <div className="social-login">
          <p className="divider">or continue with</p>
          <div className="social-icons">
            <button type="button" className="social-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.786-1.666-4.167-2.682-6.735-2.682-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.524 10-10 0-0.67-0.069-1.325-0.189-1.955h-9.811z"/>
              </svg>
            </button>
            <button type="button" className="social-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </button>
            <button type="button" className="social-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;