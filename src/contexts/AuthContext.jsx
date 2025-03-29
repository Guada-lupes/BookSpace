import React, { createContext, useState, useEffect } from "react";
import {
  checkUserCredentials,
  updateUser,
  registerUser,
} from "../services/userService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (username, password) => {
    const user = checkUserCredentials(username, password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const updateUserProfile = (updateData) => {
    if (!currentUser) return;
    const updatedUser = updateUser(currentUser.id, updateData);
    setCurrentUser(updatedUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  };

  // Corregido: Aseguramos que newUserData se pase correctamente
  const registerUserHandler = (newUserData) => {
    if (!newUserData || !newUserData.username || !newUserData.password) {
      return { success: false, error: "Datos incompletos" };
    }

    const result = registerUser(newUserData);
    return result;
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{ currentUser, login, logout, updateUserProfile, registerUser: registerUserHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};
