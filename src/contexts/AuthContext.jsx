import React, { createContext, useState } from "react";
import { checkUserCredentials } from "../services/userService";

// Creamos el contexto con un valor por defecto (null)
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // currentUser contendrá al usuario autenticado (o null si no hay ninguno)
  const [currentUser, setCurrentUser] = useState(null);

  // Función para iniciar sesión:
  const login = (username, password) => {
    // Usamos la función que definimos en userService para validar credenciales
    const user = checkUserCredentials(username, password);
    if (user) {
      setCurrentUser(user);
      return true; // Login correcto
    }
    return false; // Login fallido
  };

  // Función para cerrar sesión
  const logout = () => {
    setCurrentUser(null);
  };

  // Función para actualizar el perfil del usuario
  const updateUserProfile = (updateData) => {
    const updatedUser = updateUser(currentUser.id, updateData);
    // Actualizamos el estado con la nueva data del usuario
    setCurrentUser(updatedUser);
  };

  // Valor que se proveerá a todos los componentes consumidores del contexto
  const authContextValue = {
    currentUser,
    login,
    logout,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
