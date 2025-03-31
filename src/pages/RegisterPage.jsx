import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/RegisterPage.css"; // Importamos el archivo de estilos

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(""); // Estado para el error del correo
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad de la modal


  // Función para validar el correo
  const validateEmail = (value) => {
    setEmail(value);
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Si el correo no coincide con el formato, se muestra un error
    if (!emailRegex.test(value)) {
      setEmailError("Correo electrónico no válido");
    } else {
      setEmailError(""); // Si el correo es válido, no hay error
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Si hay error de correo, no enviar el formulario
    if (emailError) {
      return;
    }
    
    const newUserData = { username, password, fullName, email };
    const result = registerUser(newUserData);

    if (result.success) {
      setShowModal(true); // Mostramos la modal si el registro es exitoso
    } else {
      setError(result.error || "No se pudo registrar el usuario.");
    }
  };

   // Función para cerrar la modal
   const closeModal = () => {
    setShowModal(false); // Cerramos la modal
    navigate("/"); // Redirigimos al usuario a la página de login
  };


  return (
    <div className="register-page">
      <h2 className="register-title">Registro</h2>
      {error && <p className="error">{error}</p>}
      <form className="register-form" onSubmit={handleSubmit}>
        <input className="register-input"
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input className="register-input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input className="register-input"
          type="text"
          placeholder="Nombre completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
         <input className="register-input"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => validateEmail(e.target.value)}
          required
        />
        {/* Mostramos el error de correo si es necesario */}
        {emailError && <p className="error">{emailError}</p>}
        <button className="register-btn" type="submit" disabled={!!emailError}>Registrarse</button>
      </form>
      {/* Volver a login */}
      <p className="login-text">
                ¿Ya te has registrado? <Link to={"/"} className="login-forgot">Pincha aquí</Link>
            </p>

      {/* Modal para mostrar el mensaje de éxito */}
      {showModal && (
        <div className="modal-register">
          <div className="modal-register-content">
            <h3>¡Felicidades!, tu registro se ha completado con éxito</h3>
            <button className="modal-close-button" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
