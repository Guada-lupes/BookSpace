import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"; // Importamos el contexto de autenticación
import { useNavigate, Link } from "react-router-dom"; // useNavigate para redirigir, Link para el enlace a registro
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const { login } = useContext(AuthContext); // Accedemos a la función login del contexto
  const navigate = useNavigate(); 
  const [showEmailModal, setShowEmailModal] = useState(false); // Modal contraseña
  const [showConfirmModal, setShowConfirmModal] = useState(false); //Modal confirmación
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  
  const handleSubmit = (e) => {  // Maneja el envío del formulario
    e.preventDefault(); // Evita que la página se recargue
    const isLoggedIn = login(username, password); // Intenta iniciar sesión
    if (isLoggedIn) {
      navigate("/home"); // Redirige a la página principal si el login es exitoso
    } else {
      alert("Credenciales incorrectas. Inténtalo de nuevo."); // Muestra un mensaje si el login falla
    }
  };

  const handleForgotPassword = () => {
    setShowEmailModal(true);
  };

  // Función para validar el formato del correo en tiempo real
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // La expresión típica para validar el formato del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(value)) {
      setEmailError("Correo electrónico no válido");
    } else {
      setEmailError("");
    }
  };

  const handleSendEmail = () => {
    // Si hay error en el correo, no se envía
    if (emailError || email === "") {
      alert("Introduce un correo electrónico válido.");
      return;
    }
    console.log("Se envió una nueva contraseña a", email);
    setShowEmailModal(false);
    setShowConfirmModal(true);
  };


  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input className="login-input"
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Actualiza el estado con el input del usuario
        />
        <input className="login-input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Actualiza el estado con el input de la contraseña
        />
        <button className="login-button" type="submit">Iniciar Sesión</button>
            </form>
            <p className="login-text">
                ¿Aún no te has registrado? <Link className="login-link" to="/register">Regístrate aquí</Link>
            </p>
            <p className="login-text">
                ¿Has olvidado tu contraseña? <span className="login-forgot" onClick={handleForgotPassword}>Pincha aquí</span>
            </p>
            
      {/* Modal para introducir correo*/}
      {showEmailModal && (
        <div className="modal">
          <div className="modal-content">
            <p className="modal-text">Introduce tu correo electrónico para recibir una nueva contraseña</p>
            <input className="modal-input"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={handleEmailChange}
            />
            {/* Mostrar mensaje de error si el formato es inválido */}
            {emailError && <p className="error">{emailError}</p>}
            <button className="modal-button" onClick={handleSendEmail} disabled={!!emailError || email === ""}>
              Enviar
            </button>
            <button className="modal-button" onClick={() => setShowEmailModal(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}

       {/* Modal de confirmación */}
       {showConfirmModal && (
        <div className="modal">
          <div className="modal-content">
          <p className="modal-text">Te hemos enviado una nueva contraseña a tu correo electrónico.</p>
          <button className="modal-button" onClick={() => setShowConfirmModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
