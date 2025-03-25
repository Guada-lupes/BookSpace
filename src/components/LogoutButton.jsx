import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const { logout, currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Llama a la función logout del contexto
        navigate("/"); // Redirige al usuario a la página de login
      };

      if (!currentUser) return null; // Si no hay usuario logueado, no muestra el botón

      return (<button onClick={handleLogout}>Cerrar Sesión</button>)
    };
    
    export default LogoutButton;