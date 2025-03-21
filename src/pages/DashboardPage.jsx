// Dashboard - Renderizado de usuario

import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { updateUser } from "../services/userService";

const DashboardPage = () => {
  const { currentUser } = useContext(AuthContext);
  // Si el usuario no está  autenticado no se renderiza nada
  if (!currentUser) {
    return null;
  }

  return (
    <div className="dashboard">
      <h2 className="dashboard__title">
        {" "}
        ¡Bienvenido, {currentUser.fullName}!
      </h2>
      <div className="dashboard__user-info">
        <img
          src={currentUser.profilePicture}
          alt={`Perfil de ${currentUser.userName}'`}
          className="dashboard__profile-picture"
        />
      </div>
      <div className="dashboard__user-details">
        <p className="dashboard__detail">Sobre mí: {currentUser.about}</p>
        <p className="dashboard__detail">Email: {currentUser.email}</p>
        <p className="dashboard__detail">Edad: {currentUser.age}</p>
        <p className="dashboard__detail">País: {currentUser.country}</p>
      </div>
      {/* Aqui se integra la funcionalidad de actualizar datos */}
      <updateUser />
    </div>
  );
};

export default DashboardPage;
