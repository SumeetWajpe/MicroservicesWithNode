import React, { createContext, useContext, useState } from "react";
import { CurrentUser } from "../models/user.model";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(new CurrentUser());
  const login = curr_user => {
    setUser(curr_user);
  };
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
