// src/pages/AdminPage.jsx
import React, { useContext } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/AdminPageStyle.css";

const AdminPage = () => {
  const { currentUser } = useContext(AuthContext);

  // Si el usuario no es admin, redirige al Dashboard
  if (!currentUser || currentUser.role !== "admin") {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__header">
          <img
            src={currentUser.profilePicture}
            alt={currentUser.fullName}
            className="admin-sidebar__avatar"
          />
          <h2 className="admin-sidebar__title">{currentUser.fullName}</h2>
        </div>
        <nav className="admin-sidebar__nav">
          <Link className="admin-sidebar__link" to="users">
            Lista de Usuarios
          </Link>
          <Link className="admin-sidebar__link" to="books">
            Gestión de Libros
          </Link>
        </nav>
      </aside>
      <main className="admin-content">
        <Outlet />{" "}
        {/* Aquí se renderizan las rutas hijadas: AdminUsersPage o AdminBooksPage */}
      </main>
    </div>
  );
};

export default AdminPage;
