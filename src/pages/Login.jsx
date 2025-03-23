import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";  // Para redirigir al usuario después del login

const Login = () => {
  const [username, setUsername] = useState("");  // Estado para el nombre de usuario
  const [password, setPassword] = useState("");  // Estado para la contraseña
  const { login, error } = useContext(AuthContext);  // Accedemos a la función de login y el error desde el contexto
  const history = useHistory();  // Usamos history para redirigir

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const isAuthenticated = login(username, password);  // Llamamos a la función de login
    if (isAuthenticated) {
      history.push("/home");  // Si el login es exitoso, redirigimos a la página principal
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      {error && <p>{error}</p>}  {/* Mostramos el error si existe */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}  // Actualizamos el nombre de usuario
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Actualizamos la contraseña
        />
        <button type="submit">Iniciar sesión</button>  {/* Botón de inicio de sesión */}
      </form>
    </div>
  );
};

export default Login;