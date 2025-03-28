import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // Cierra la sesión
    navigate("/"); // Redirige al login
  }, [logout, navigate]);

  return null; // No muestra nada
};

export default LogoutButton;