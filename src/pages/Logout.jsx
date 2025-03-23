import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";  // Para redirigir al usuario después del logout

const Logout = () => {
  const { logout } = useContext(AuthContext);  // Accedemos a la función de logout desde el contexto
  const history = useHistory();  // Usamos history para redirigir

  // Maneja el clic en el botón de logout
  const handleLogout = () => {
    logout();  // Llamamos a la función de logout
    history.push("/login");  // Redirigimos al usuario al login después de cerrar sesión
  };

  return (
    <div>
      <h2>¿Estás seguro de que quieres cerrar sesión?</h2>
      <button onClick={handleLogout}>Cerrar sesión</button>  {/* Botón para cerrar sesión */}
    </div>
  );
};

export default Logout;