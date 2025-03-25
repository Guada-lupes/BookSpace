import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/DashboardStyle.css";

const DashboardPage = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <div className="dashboard__placeholder">
        <p>Debes estar autenticado para ver el dashboard.</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h2 className="dashboard__title">
          ¡Bienvenido, {currentUser.fullName}!
        </h2>
        <button
          className="dashboard__edit-btn"
          onClick={() => navigate("edit")}
        >
          Editar perfil
        </button>
      </header>
      <div className="dashboard__content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
