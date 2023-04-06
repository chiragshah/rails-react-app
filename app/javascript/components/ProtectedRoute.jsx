import * as React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  if (!window.localStorage.authToken && window.localStorage.authToken == null) {
    // user is not authenticated
    return <Navigate to="/sign_in" />;
  }
  return children;
};
