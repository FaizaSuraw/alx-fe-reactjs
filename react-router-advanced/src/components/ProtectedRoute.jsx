import { Navigate } from "react-router-dom";

const useAuth = () => {
  return localStorage.getItem("auth") === "true";
};

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
