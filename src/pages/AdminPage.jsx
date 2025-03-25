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
    <div className="admin-page">
      <header className="admin-page__header">
        <h2 className="admin-page__title">Panel de Administración</h2>
        <nav className="admin-page__nav">
          {/* Enlaces a distintas secciones */}
          <Link className="admin-page__nav-link" to="users">
            Lista de Usuarios
          </Link>
          <Link className="admin-page__nav-link" to="books">
            Gestión de Libros
          </Link>
        </nav>
      </header>
      <div className="admin-page__content">
        <Outlet /> {/* Rutas hijas se renderizan aquí */}
      </div>
    </div>
  );
};

export default AdminPage;
