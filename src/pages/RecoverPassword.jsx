import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");  // Estado para el correo electrónico
  const { recoverPassword, error } = useContext(AuthContext);  // Accedemos a la función de recuperación de contraseña

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPassword = recoverPassword(email);  // Llamamos a la función para recuperar la contraseña
    if (newPassword) {
      alert(newPassword);  // Mostramos la nueva contraseña generada (en un caso real, se enviaría por correo)
    }
  };

  return (
    <div>
      <h2>Recuperar Contraseña</h2>
      {error && <p>{error}</p>}  {/* Mostramos el error si existe */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Actualizamos el correo electrónico
        />
        <button type="submit">Recuperar contraseña</button>  {/* Botón para recuperar la contraseña */}
      </form>
    </div>
  );
};

export default RecoverPassword;