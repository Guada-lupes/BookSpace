import { useState } from "react";

const RecoverPassword = () => {
  const [email, setEmail] = useState(""); // Almacena el email ingresado

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Te hemos enviado un correo para recuperar tu contraseña.");
  };

  return (
    <div>
      <h2>Recuperar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
          placeholder="Correo electrónico"
          required // Asegura que este campo sea obligatorio
        />
        <button type="submit">Recuperar contraseña</button>
      </form>
    </div>
  );
};

export default RecoverPassword;