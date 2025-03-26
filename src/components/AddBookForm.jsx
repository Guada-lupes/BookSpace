// src/components/AddBookForm.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminsBooksContext } from "../contexts/AdminsBooksContext";
import "../styles/AddBookFormStyle.css";

const AddBookForm = ({ onClose }) => {
  const { addBook } = useContext(AdminsBooksContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    titulo: "",
    autor: "",
    imagen: "",
    genero: "",
    rating: "",
  });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("AddBookForm - Enviando:", formData);
    addBook(formData);
    setMensaje("¡Libro añadido con éxito!");
    setTimeout(() => {
      if (onClose) onClose();
      else navigate("/admin/books");
    }, 1500);
  };

  // Función para cancelar y volver atrás
  const handleCancel = () => {
    if (onClose) onClose();
    else navigate("/admin/books");
  };

  return (
    <div className="add-book-form">
      <h3 className="add-book-form__title">Añadir Libro</h3>
      <form onSubmit={handleSubmit} className="add-book-form__form">
        <label className="add-book-form__label">
          Título:
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="add-book-form__input"
          />
        </label>
        <label className="add-book-form__label">
          Autor:
          <input
            type="text"
            name="autor"
            value={formData.autor}
            onChange={handleChange}
            className="add-book-form__input"
          />
        </label>
        <label className="add-book-form__label">
          URL de la imagen:
          <input
            type="text"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            className="add-book-form__input"
          />
        </label>
        <label className="add-book-form__label">
          Género:
          <input
            type="text"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            className="add-book-form__input"
          />
        </label>
        <label className="add-book-form__label">
          Rating:
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="add-book-form__input"
          />
        </label>
        <button type="submit" className="add-book-form__btn">
          Agregar Libro
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="add-book-form__cancel-btn"
        >
          Cancelar
        </button>
      </form>
      {mensaje && <p className="add-book-form__message">{mensaje}</p>}
    </div>
  );
};

export default AddBookForm;
