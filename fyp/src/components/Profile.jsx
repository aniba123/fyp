import { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './Profile.css'
const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Agar user login nahi hai to login page par bhej do
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout(); // user null ho jayega, token remove hoga
    navigate('/login'); // logout ke baad login page pe redirect
  };

  if (!user) {
    return null; // jab tak redirect ho raha hai tab tak kuch show mat karo
  }

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <div>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Password:</strong> ••••••••</p>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
