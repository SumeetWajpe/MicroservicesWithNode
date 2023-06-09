import React, { createContext, useContext, useState } from "react";
import { CurrentUser } from "../models/user.model";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(new CurrentUser());
  const login = curr_user => {
    console.log("Setting isLoggedIn - true !");
    setUser(curr_user);
  };
  const logout = () => {
    setUser({ name: "", email: "", password: "", isLoggedIn: false });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
