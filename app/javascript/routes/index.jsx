import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { UnProtectedRoute } from "../components/UnProtectedRoute";
import Home from "../components/Home";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Invite from "../components/Invite";

export default (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sign_in"
        element={
          <UnProtectedRoute>
            <SignIn />
          </UnProtectedRoute>
        }
      />
      <Route
        path="/sign_up"
        element={
          <UnProtectedRoute>
            <SignUp />
          </UnProtectedRoute>
        }
      />
      <Route
        path="/invite"
        element={
          <ProtectedRoute>
            <Invite />
          </ProtectedRoute>
        } 
      />
    </Routes>
  </Router>
);
