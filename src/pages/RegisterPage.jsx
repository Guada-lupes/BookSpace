import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom"; // Usamos useNavigate en lugar de useHistory

const RegisterPage = () => {
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [fullName, setFullName] = useState(""); // Estado para el nombre completo
  const [email, setEmail] = useState(""); // Estado para el correo electrónico
  const { register, error } = useContext(AuthContext); // Accedemos a la función de registro y el error desde el contexto
  const navigate = useNavigate(); // Usamos useNavigate para redirigir al usuario

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const isRegistered = register(username, password, fullName, email); // Llamamos a la función de registro
    if (isRegistered) {
      navigate("/LoginPage"); // Si el registro es exitoso, redirigimos a la página de login
    }
  };

  return (
    <div>
      <h2>Registrar Usuario</h2>
      {error && <p>{error}</p>} {/* Mostramos el error si existe */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Actualizamos el nombre de usuario
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Actualizamos la contraseña
        />
        <input
          type="text"
          placeholder="Nombre completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)} // Actualizamos el nombre completo
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Actualizamos el correo electrónico
        />
        <button type="submit">Registrar</button> {/* Botón de registro */}
      </form>
    </div>
  );
};


export default RegisterPage;