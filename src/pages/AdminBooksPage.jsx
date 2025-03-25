// src/pages/AdminBooksPage.jsx
import React, { useContext } from "react";
import { AdminsBooksContext } from "../contexts/AdminsBooksContext";
import { Link, Outlet } from "react-router-dom";
import "../styles/AdminBooksPageStyle.css";

const AdminBooksPage = () => {
  const { books, removeBook } = useContext(AdminsBooksContext);

  return (
    <div className="admin-books">
      <h3 className="admin-books__title">Gestión de Libros</h3>
      <Link to="add">
        <button className="admin-books__add-btn">Añadir Libro</button>
      </Link>
      <div className="admin-books__list">
        {books.map((book) => (
          <div key={book.id} className="admin-books__item">
            <p className="admin-books__item-title">{book.titulo}</p>
            <div className="admin-books__actions">
              <Link to={`edit/${book.id}`}>
                <button className="admin-books__edit-btn">Editar</button>
              </Link>
              <button
                className="admin-books__delete-btn"
                onClick={() => {
                  if (window.confirm("¿Deseas eliminar este libro?"))
                    removeBook(book.id);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default AdminBooksPage;
