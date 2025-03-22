import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook useNavigate

const Login = () => {
  const [email, setEmail] = useState(""); // Almacena el email introducido
  const [password, setPassword] = useState(""); // Almacena la contraseña introducida
  const [user, setUser] = useState(null); // Almacena el usuario actual (null si no hay usuario)

  const navigate = useNavigate(); // Inicializa el hook para redirigir

  // useEffect para verificar si hay un usuario guardado en localStorage al cargar la página
  useEffect(() => {
    const savedUser = localStorage.getItem("user"); // Intentamos obtener el usuario del localStorage
    if (savedUser) {
      setUser(savedUser); // Si existe un usuario guardado, actualizamos el estado
    }
  }, []);

  // Función que maneja el envío del formulario de inicio de sesión
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto de un formulario
    localStorage.setItem("user", email); // Guardamos el email en localStorage
    setUser(email); // Establecemos el usuario en el estado
  };

  // Función que maneja el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem("user"); // Eliminamos el usuario guardado en localStorage
    setUser(null); // Reseteamos el estado del usuario a null
  };

  // Función que maneja el clic en "¿Olvidaste tu contraseña?"
  const handleForgotPassword = () => {
    navigate("/recover-password"); // Redirige a la página de recuperación de contraseña
  };

  return (
    <div>
      {/* Si ya hay un usuario logueado, mostramos el mensaje de bienvenida */}
      {user && (
        <div>
          <p>Bienvenido, {user}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}

      {/* Si no hay un usuario logueado, mostramos el formulario de inicio de sesión */}
      {user === null && (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
            placeholder="Correo electrónico"
            required // Asegura que este campo sea obligatorio
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
            placeholder="Contraseña"
            required // Asegura que este campo sea obligatorio
          />
          <button type="submit">Iniciar sesión</button> {/* Botón para enviar el formulario */}
          
          <div>
            {/* Enlace para la recuperación de contraseña */}
            <button type="button" onClick={handleForgotPassword}>
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;