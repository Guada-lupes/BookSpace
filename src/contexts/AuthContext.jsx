import React, { createContext, useState, useEffect } from "react";
import {
  checkUserCredentials,
  updateUser,
  registerUser,
} from "../services/userService";

// Creamos el contexto de autenticación
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // Estado para almacenar el usuario autenticado

// useEffect para recuperar el usuario guardado en localStorage al recargar la página
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser)); // Convertimos el string en objeto y lo guardamos en el estado
    }
  }, []);
  

  // Función para iniciar sesión
  const login = (username, password) => {
    const user = checkUserCredentials(username, password); // Verificamos credenciales con userService
    if (user) {
      setCurrentUser(user); // Guardamos el usuario en el estado
      localStorage.setItem("currentUser", JSON.stringify(user)); // Guardamos en localStorage
      return true; // Devolvemos true si el login es exitoso
    }
    return false; // Devolvemos false si el login falla
  };

  // Función para cerrar sesión
  const logout = () => {
    setCurrentUser(null); // Borramos el usuario del estado
    localStorage.removeItem("currentUser"); // Eliminamos el usuario de localStorage
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
