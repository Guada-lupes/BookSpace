// src/components/EditBookForm.jsx
import React, { useState, useContext, useEffect } from "react";
import { AdminsBooksContext } from "../contexts/AdminsBooksContext";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/EditBookFormStyle.css";

const EditBookForm = () => {
  const { id } = useParams();
  const { books, updateBook } = useContext(AdminsBooksContext);
  const navigate = useNavigate();

  const bookToEdit = books.find((book) => book.id === Number(id));
  console.log("EditBookForm - bookToEdit:", bookToEdit);

  const [formData, setFormData] = useState({
    titulo: "",
    autor: "",
    imagen: "",
    genero: "",
    rating: "",
  });

  useEffect(() => {
    if (bookToEdit) {
      setFormData({
        titulo: bookToEdit.titulo,
        autor: bookToEdit.autor,
        imagen: bookToEdit.imagen,
        genero: bookToEdit.genero,
        rating: bookToEdit.rating,
      });
    }
  }, [bookToEdit, id]);

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("EditBookForm - handleSubmit, formData:", formData);
    updateBook(Number(id), formData);
    setMensaje("¡Libro actualizado con éxito!");
    setTimeout(() => {
      navigate("/admin/books");
    }, 1500);
  };

  return (
    <div className="edit-book-form">
      <h3 className="edit-book-form__title">Editar Libro</h3>
      {!bookToEdit && <p>No se encontró el libro.</p>}
      <form onSubmit={handleSubmit} className="edit-book-form__form">
        <label className="edit-book-form__label">
          Título:
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="edit-book-form__input"
          />
        </label>
        <label className="edit-book-form__label">
          Autor:
          <input
            type="text"
            name="autor"
            value={formData.autor}
            onChange={handleChange}
            className="edit-book-form__input"
          />
        </label>
        <label className="edit-book-form__label">
          URL de la imagen:
          <input
            type="text"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            className="edit-book-form__input"
          />
        </label>
        <label className="edit-book-form__label">
          Género:
          <input
            type="text"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            className="edit-book-form__input"
          />
        </label>
        <label className="edit-book-form__label">
          Rating:
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="edit-book-form__input"
          />
        </label>
        <button type="submit" className="edit-book-form__btn">
          Actualizar Libro
        </button>
      </form>
      {mensaje && <p className="edit-book-form__message">{mensaje}</p>}
    </div>
  );
};

export default EditBookForm;
