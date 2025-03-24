import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom"; // Usamos useNavigate en lugar de useHistory

const LoginPage = () => {
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const { login, error } = useContext(AuthContext); // Accedemos a la función de login y el error desde el contexto
  const navigate = useNavigate(); // Usamos useNavigate para redirigir al usuario

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoggedIn = login(username, password); // Llamamos a la función de login
    if (isLoggedIn) {
      navigate("/home"); // Si el login es exitoso, redirigimos al usuario a la página principal
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
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
        <button type="submit">Iniciar Sesión</button>{" "}
        {/* Botón de inicio de sesión */}
      </form>
    </div>
  );
};

export default LoginPage;
