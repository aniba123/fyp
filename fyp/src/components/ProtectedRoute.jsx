// src/components/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // agar user login nahi hai to login page par redirect ho jaye
    return <Navigate to="/login" replace />;
  }

  // agar user login hai to original page show ho
  return children;
};

export default ProtectedRoute;
