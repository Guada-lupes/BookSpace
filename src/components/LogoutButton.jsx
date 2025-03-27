import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      logout(); // Cierra la sesión
      navigate("/"); // Redirige al login (o a "/login" si lo prefieres)
    }
  }, [currentUser, logout, navigate]);

  return null; // No muestra nada
};

export default LogoutButton;