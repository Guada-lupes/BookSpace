import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

  const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Función para validar el correo
  const validateEmail = (value) => {
    setEmail(value);
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Si el correo no coincide con el formato, se muestra un error
    if (!emailRegex.test(value)) {
      setEmailError("Correo no válido");
    } else {
      setEmailError(""); //si el correo es válido no habrá error
    }
  };

  //Función para manejar envío formulario
  const handleSubmit = (e) => {
    e.preventDefault();

  //Si hay error no se enviará el formulario
  if (emailError) {
    return;
  }
    
    const newUserData = { username, password, fullName, email };
    const result = registerUser(newUserData);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error || "No se pudo registrar el usuario.");
    }
  };

  return (
    <div>
      <h2>Registrar Usuario</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nombre completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => validateEmail(e.target.value)}
          required
        />
        {/* Mostramos el error de correo si es necesario */}
        {emailError && <p className="error">{emailError}</p>}
        <button type="submit" disabled={!!emailError}>Registrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
