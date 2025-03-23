import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom"; // Usamos useNavigate en lugar de useHistory

const LogoutPage = () => {
  const { logout } = useContext(AuthContext); // Accedemos a la función de logout desde el contexto
  const navigate = useNavigate(); // Usamos useNavigate para redirigir al usuario después de hacer logout

  // Maneja el logout
  const handleLogout = () => {
    logout(); // Llamamos a la función de logout que limpia al usuario actual
    navigate("/LoginPage"); // Redirigimos al usuario a la página de login después de hacer logout
  };

  return (
    <div>
      <h2>Salir</h2>
      <button onClick={handleLogout}>Cerrar sesión</button> {/* Botón para cerrar sesión */}
    </div>
  );
};

export default LogoutPage;