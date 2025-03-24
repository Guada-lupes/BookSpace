import React, { createContext, useState, useEffect } from "react";
import {
  checkUserCredentials,
  updateUser,
  registerUser,
} from "../services/userService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Estados: inicializamos currentUser a partir de localStorage si existe
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Iniciar sesión: guarda el usuario tanto en estado como en localStorage
  const login = (username, password) => {
    const user = checkUserCredentials(username, password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    }
    return false;
  };

  // Cerrar sesión: elimina al usuario del estado y de localStorage
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  // Actualizar perfil: modifica los datos del usuario y actualiza en localStorage
  const updateUserProfile = (updateData) => {
    if (!currentUser) return;
    const updatedUser = updateUser(currentUser.id, updateData);
    setCurrentUser(updatedUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  };

  // Registro de usuario
  const registerUserHandler = (newUserData) => {
    const result = registerUser(newUserData);
    return result;
  };

  // useEffect para mantener sincronizado localStorage con cualquier cambio en currentUser
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  const authContextValue = {
    currentUser,
    login,
    logout,
    updateUserProfile,
    registerUser: registerUserHandler,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
