import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/UpdateUserFormStyle.css";
import defaultAvatar from "../assets/icons/default-avatar.png";

const UpdateUserForm = ({ onCancel }) => {
  const { currentUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  // Si no se recibe onCancel como prop, usamos una función por defecto que redirige a /dashboard.
  const handleCancel = onCancel ? onCancel : () => navigate("/dashboard");

  const [formData, setFormData] = useState({
    fullName: currentUser.fullName,
    profilePicture: currentUser.profilePicture,
    about: currentUser.about,
    email: currentUser.email,
    age: currentUser.age,
    country: currentUser.country,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Si la foto de perfil queda en blanco, se asigna el avatar predeterminado.
    const updatedData = {
      ...formData,
      profilePicture:
        formData.profilePicture.trim() === ""
          ? defaultAvatar
          : formData.profilePicture,
    };

    updateUserProfile(updatedData);
    setMessage("¡Perfil actualizado con éxito!");
    // Redirige al dashboard después de 2 segundos
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="update-user">
      <h3 className="update-user__title">Editar perfil</h3>

      {/* Vista previa del avatar */}
      <div className="update-user__avatar-preview">
        <img
          src={
            formData.profilePicture.trim() === ""
              ? defaultAvatar
              : formData.profilePicture
          }
          alt="Avatar de perfil"
          className="update-user__avatar-img"
        />
      </div>

      <form className="update-user__form" onSubmit={handleSubmit}>
        <label className="update-user__label">
          Nombre:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="update-user__input"
            disabled
          />
        </label>
        <label className="update-user__label">
          URL de la foto de perfil:
          <input
            type="text"
            name="profilePicture"
            value={formData.profilePicture}
            onChange={handleChange}
            className="update-user__input"
          />
        </label>
        <label className="update-user__label">
          Sobre mí:
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="update-user__textarea"
          />
        </label>
        <label className="update-user__label">
          Correo electrónico:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="update-user__input"
            disabled
          />
        </label>
        <label className="update-user__label">
          Edad:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="update-user__input"
          />
        </label>
        <label className="update-user__label">
          País:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="update-user__input"
          />
        </label>
        <div className="update-user__buttons">
          <button type="submit" className="update-user__submit-btn">
            Guardar
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="update-user__cancel-btn"
          >
            Descartar cambios
          </button>
        </div>
        {message && <p className="update-user__message">{message}</p>}
      </form>
    </div>
  );
};

export default UpdateUserForm;
