// src/components/EditBookForm.jsx
import React, { useState, useContext, useEffect } from "react";
import { AdminsBooksContext } from "../contexts/AdminsBooksContext";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/EditBookFormStyle.css";

const EditBookForm = ({ onClose }) => {
  const { id } = useParams();
  const { books, updateBook } = useContext(AdminsBooksContext);
  const navigate = useNavigate();

  const bookToEdit = books.find((book) => book.id === Number(id));
  console.log("EditBookForm - bookToEdit:", bookToEdit);

  // Estado para el formulario
  const [formData, setFormData] = useState({
    titulo: "",
    autor: "",
    imagen: "",
    genero: "",
    rating: "",
  });

  // Pre-cargar los datos del libro (si se encuentra)
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

  // Estado para mensajes de error o confirmación
  const [mensaje, setMensaje] = useState("");

  // Función para manejar los cambios en los inputs
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Función para validar el formulario
  const validateForm = () => {
    // Verifica que ningún campo requerido esté vacío (usando trim para evitar espacios)
    if (
      !formData.titulo.trim() ||
      !formData.autor.trim() ||
      !formData.imagen.trim() ||
      !formData.genero.trim() ||
      !formData.rating.toString().trim()
    ) {
      setMensaje("Por favor, complete todos los campos.");
      return false;
    }
    // Verifica que el rating sea un número
    if (isNaN(formData.rating)) {
      setMensaje("El campo Rating debe ser un número.");
      return false;
    }
    // Verificación básica de URL para la imagen (este regex es básico)
    const urlRegex = /^(https?:\/\/)[^\s$.?#].[^\s]*$/;
    if (!urlRegex.test(formData.imagen.trim())) {
      setMensaje("Por favor, ingrese una URL válida para la imagen.");
      return false;
    }
    return true;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validamos el formulario
    if (!validateForm()) return;

    console.log("EditBookForm - Enviando formulario:", formData);
    // Actualiza el libro en el context
    updateBook(Number(id), formData);
    setMensaje("¡Libro actualizado con éxito!");
    setTimeout(() => {
      if (onClose) {
        onClose();
      } else {
        navigate("/admin/books");
      }
    }, 1500);
  };

  // Función para cancelar la edición y volver atrás
  const handleCancel = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/admin/books");
    }
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
        <button
          type="button"
          onClick={handleCancel}
          className="edit-book-form__cancel-btn"
        >
          Cancelar
        </button>
      </form>
      {mensaje && <p className="edit-book-form__message">{mensaje}</p>}
    </div>
  );
};

export default EditBookForm;
