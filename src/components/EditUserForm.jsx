// src/components/EditUserForm.jsx
import React, { useState, useContext, useEffect } from "react";
import { UsersContext } from "../contexts/UsersContext";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/EditUserFormStyle.css";

const EditUserForm = () => {
  const { id } = useParams();
  const { users, updateUserById } = useContext(UsersContext);
  const navigate = useNavigate();

  const userToEdit = users.find((user) => user.id === Number(id));
  console.log("EditUserForm - userToEdit:", userToEdit);

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    about: "",
    age: "",
    country: "",
    profilePicture: "",
    role: "user",
    status: "active",
  });

  useEffect(() => {
    if (userToEdit) {
      setFormData({
        fullName: userToEdit.fullName,
        username: userToEdit.username,
        email: userToEdit.email,
        about: userToEdit.about,
        age: userToEdit.age,
        country: userToEdit.country,
        profilePicture: userToEdit.profilePicture,
        role: userToEdit.role,
        status: userToEdit.status || "active",
      });
    }
  }, [userToEdit, id]);

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (
      !formData.fullName.trim() ||
      !formData.username.trim() ||
      !formData.email.trim()
    ) {
      setMensaje(
        "Por favor, complete los campos obligatorios (Nombre, Usuario y Correo)."
      );
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setMensaje("Por favor, ingrese un correo válido.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    updateUserById(Number(id), formData);
    setMensaje("¡Usuario actualizado con éxito!");
    setTimeout(() => {
      navigate("/admin/users");
    }, 1500);
  };

  return (
    <div className="edit-user-form">
      <h3 className="edit-user-form__title">Editar Usuario</h3>
      {userToEdit ? (
        <form onSubmit={handleSubmit} className="edit-user-form__form">
          <label className="edit-user-form__label">
            Nombre Completo:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="edit-user-form__input"
            />
          </label>
          <label className="edit-user-form__label">
            Usuario:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="edit-user-form__input"
            />
          </label>
          <label className="edit-user-form__label">
            Correo Electrónico:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="edit-user-form__input"
            />
          </label>
          <label className="edit-user-form__label">
            Sobre Mí:
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="edit-user-form__textarea"
            />
          </label>
          <label className="edit-user-form__label">
            Edad:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="edit-user-form__input"
            />
          </label>
          <label className="edit-user-form__label">
            País:
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="edit-user-form__input"
            />
          </label>
          <label className="edit-user-form__label">
            URL de la foto de perfil:
            <input
              type="text"
              name="profilePicture"
              value={formData.profilePicture}
              onChange={handleChange}
              className="edit-user-form__input"
            />
          </label>
          <div className="edit-user-form__actions">
            <button type="submit" className="edit-user-form__btn">
              Actualizar Usuario
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/users")}
              className="edit-user-form__cancel-btn"
            >
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <p>No se encontró el usuario.</p>
      )}
      {mensaje && <p className="edit-user-form__message">{mensaje}</p>}
    </div>
  );
};

export default EditUserForm;
