import React from "react";
import { Navigate } from "react-router-dom";

export const UnProtectedRoute = ({ children }) => {
  if (window.localStorage.authToken && window.localStorage.authToken != null) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};
