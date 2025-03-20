// Dashboard - Renderizado de usuario

import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const DashboardPage = () => {
  const { currentUser } = useContext(AuthContext);
  // Si el usuario no está  autenticado no se renderiza nada
  if (!currentUser) {
    return null;
  }

  return <div>DashboardPage</div>;
};

export default DashboardPage;
