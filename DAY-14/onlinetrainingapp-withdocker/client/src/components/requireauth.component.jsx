import React from "react";
import { useAuth } from "./auth_provider";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  const authCtx = useAuth();

  if (!authCtx?.user?.isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
}
