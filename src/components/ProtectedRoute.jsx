import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user"); 
  return user ? children : <Navigate to="/publicSetion"
  />; 
};

export default ProtectedRoute;