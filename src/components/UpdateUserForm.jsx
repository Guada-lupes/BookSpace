import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/UpdateUserFormStyle.css";

const UpdateUserForm = ({ onCancel }) => {
  const { currentUser, updateUserProfile } = useContext(AuthContext);
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
    updateUserProfile(formData);
    setMessage("¡Perfil editado con éxito!");
    // Opcional: se puede llamar a onCancel() para salir del modo edición al actualizar.
  };

  return (
    <div className="update-user">
      <h3 className="update-user__title">Editar perfil</h3>
      <form className="update-user__form" onSubmit={handleSubmit}>
        <label className="update-user__label">
          Nombre:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="update-user__input"
          />
        </label>
        <label className="update-user__label">
          URL de la foto de perfil:{" "}
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
            onClick={onCancel}
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
