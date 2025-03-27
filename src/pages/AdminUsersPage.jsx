// src/pages/AdminUsersPage.jsx
import React, { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";
import { Link } from "react-router-dom";
import "../styles/AdminUsersPageStyle.css";

const AdminUsersPage = () => {
  const { users, removeUser, toggleBlockUser } = useContext(UsersContext);

  return (
    <div className="admin-users">
      <h3 className="admin-users__title">Gestión de Usuarios</h3>
      <div className="admin-users__list">
        {users.map((user) => (
          <div key={user.id} className="admin-users__item">
            <p className="admin-users__name">{user.fullName}</p>
            <p className="admin-users__username">@{user.username}</p>
            <p className="admin-users__email">{user.email}</p>
            <p className="admin-users__status">
              Estado: {user.status ? user.status : "active"}
            </p>
            <p className="admin-users__role">Rol: {user.role}</p>
            <div className="admin-users__actions">
              <Link to={`edit/${user.id}`}>
                <button className="admin-users__edit-btn">Editar</button>
              </Link>
              <button
                className="admin-users__block-btn"
                onClick={() => toggleBlockUser(user.id)}
              >
                {user.status === "active" ? "Bloquear" : "Desbloquear"}
              </button>
              <button
                className="admin-users__delete-btn"
                onClick={() => {
                  if (window.confirm("¿Deseas eliminar este usuario?"))
                    removeUser(user.id);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsersPage;
