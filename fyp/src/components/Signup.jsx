// import React, { useState } from 'react';
// import './Signup.css';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
//     if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
    
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//     }
    
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsSubmitting(true);
//       // Simulate API call
//       setTimeout(() => {
//         setIsSubmitting(false);
//         alert('Account created successfully!');
//       }, 1500);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-card">
//         {/* Optional logo/brand */}
//         <div className="brand">
//           <svg width="40" height="40" viewBox="0 0 24 24" fill="#4285F4">
//             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
//             <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
//           </svg>
//           <h1>ShopEase</h1>
//         </div>

//         <h2>Create your account</h2>
//         <p className="subtext">Sign up to continue to ShopEase</p>

//         <form onSubmit={handleSubmit} noValidate>
//           <div className="form-group">
//             <div className="name-fields">
//               <div className="input-group">
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="First name"
//                   required
//                   className={errors.firstName ? 'error' : ''}
//                 />
//                 {errors.firstName && <span className="error-message">{errors.firstName}</span>}
//               </div>
              
//               <div className="input-group">
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Last name"
//                   required
//                   className={errors.lastName ? 'error' : ''}
//                 />
//                 {errors.lastName && <span className="error-message">{errors.lastName}</span>}
//               </div>
//             </div>

//             <div className="input-group">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email address"
//                 required
//                 className={errors.email ? 'error' : ''}
//               />
//               {errors.email && <span className="error-message">{errors.email}</span>}
//             </div>

//             <div className="input-group">
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Password"
//                 required
//                 minLength="8"
//                 className={errors.password ? 'error' : ''}
//               />
//               {errors.password && <span className="error-message">{errors.password}</span>}
//               <div className="password-hint">Use at least 8 characters</div>
//             </div>

//             <div className="input-group">
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 placeholder="Confirm password"
//                 required
//                 className={errors.confirmPassword ? 'error' : ''}
//               />
//               {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
//             </div>
//           </div>

//           <div className="actions">
//             <button type="submit" className="signup-button" disabled={isSubmitting}>
//               {isSubmitting ? (
//                 <span className="spinner"></span>
//               ) : (
//                 'Sign Up'
//               )}
//             </button>
//           </div>
//         </form>

//         <div className="footer">
//           <p>Already have an account? 
//         <Link  to="/login" className="signin-link">Sign in</Link>
//             </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;






import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { confirmPassword, ...userData } = formData;
      
      await axios.post(
        'http://localhost:5000/api/auth/register',
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      alert('Account created successfully! Please login.');
      navigate('/login');
    } catch (err) {
      setApiError(
        err.response?.data?.message || 
        'Registration failed. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="brand">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#4285F4">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          </svg>
          <h1>ShopEase</h1>
        </div>

        <h2>Create your account</h2>
        <p className="subtext">Sign up to continue to ShopEase</p>

        {apiError && <div className="api-error">{apiError}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <div className="name-fields">
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              
              <div className="input-group">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                minLength="8"
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
              <div className="password-hint">Use at least 8 characters</div>
            </div>

            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
                className={errors.confirmPassword ? 'error' : ''}
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
          </div>

          <div className="actions">
            <button type="submit" className="signup-button" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="spinner"></span>
              ) : (
                'Sign Up'
              )}
            </button>
          </div>
        </form>

        <div className="footer">
          <p>Already have an account? <Link to="/login" className="signin-link">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;