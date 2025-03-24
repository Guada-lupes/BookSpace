import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
// importar estilado cuando lo haya

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
    setMessage("Profile updated successfully!");
    // Opcional: se puede llamar a onCancel() para salir del modo edición al actualizar.
  };

  return (
    <div className="update-user">
      <h3 className="update-user__title">Edit Your Profile</h3>
      <form className="update-user__form" onSubmit={handleSubmit}>
        <label className="update-user__label">
          Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="update-user__input"
          />
        </label>
        <label className="update-user__label">
          Profile Picture URL:
          <input
            type="text"
            name="profilePicture"
            value={formData.profilePicture}
            onChange={handleChange}
            className="update-user__input"
          />
        </label>
        <label className="update-user__label">
          About:
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="update-user__textarea"
          />
        </label>
        <label className="update-user__label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="update-user__input"
          />
        </label>
        <label className="update-user__label">
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="update-user__input"
          />
        </label>
        <label className="update-user__label">
          Country:
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
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="update-user__cancel-btn"
          >
            Cancel
          </button>
        </div>
        {message && <p className="update-user__message">{message}</p>}
      </form>
    </div>
  );
};

export default UpdateUserForm;
