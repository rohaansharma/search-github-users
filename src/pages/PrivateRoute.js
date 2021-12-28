import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = () => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return isUser ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
