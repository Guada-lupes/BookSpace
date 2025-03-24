// Dashboard - Renderizado de usuario

import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import UpdateUserForm from "../components/UpdateUserForm";
import "../styles/DashboardStyle.css";
const DashboardPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);

  // Si no hay usuario autenticado, se podría renderizar un mensaje o un placeholder
  if (!currentUser) {
    return (
      <div className="dashboard__placeholder">
        <p>Debes estar logueado para acceder a tu dashboard.</p>
      </div>
    );
  }
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h2 className="dashboard__title">
          {" "}
          ¡Bienvenido, {currentUser.fullName}!
        </h2>
        <button
          className="dashboard__edit-btn"
          onClick={() => setEditMode((prev) => !prev)}
        >
          {editMode ? "Cancel" : "Edit"}
        </button>
      </header>
      <div className="dashboard__content">
        {editMode ? (
          <UpdateUserForm onCancel={() => setEditMode(false)} />
        ) : (
          <DashboardUserDetails />
        )}
      </div>
    </div>
  );
};

export default DashboardPage;

{
  /* Aqui se integra la funcionalidad de actualizar datos */
}
{
  /* Falta formulario que permita actualizar datos
      o
      un botón de edit y salga un formulario para editar */
}
