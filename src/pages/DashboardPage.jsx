// // Dashboard - Renderizado de usuario

// import React, { useContext, useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import DashboardUserDetails from "../components/DashboardUserDetails";
// import UpdateUserForm from "../components/UpdateUserForm";
// import "../styles/DashboardStyle.css";
// import { Outlet } from "react-router-dom";

// const DashboardPage = () => {
//   const { currentUser } = useContext(AuthContext);
//   const [editMode, setEditMode] = useState(false);

//   // Si no hay usuario autenticado, se podría renderizar un mensaje o un placeholder
//   if (!currentUser) {
//     return (
//       <div className="dashboard__placeholder">
//         <p>Debes estar logueado para acceder a tu dashboard.</p>
//       </div>
//     );
//   }
//   return (
//     <div className="dashboard">
//       <header className="dashboard__header">
//         <h2 className="dashboard__title">
//           {" "}
//           ¡Bienvenido, {currentUser.fullName}!
//         </h2>
//         <button
//           className="dashboard__edit-btn"
//           onClick={() => setEditMode((prev) => !prev)}
//         >
//           {editMode ? "Cancelar edición" : "Editar"}
//         </button>
//       </header>
//       <div className="dashboard__content">
//         {editMode ? (
//           <UpdateUserForm onCancel={() => setEditMode(false)} />
//         ) : (
//           <DashboardUserDetails />
//         )}
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/DashboardStyle.css";

const DashboardPage = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <div className="dashboard__placeholder">
        <p>Debes estar autenticado para ver el dashboard.</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h2 className="dashboard__title">
          ¡Bienvenido, {currentUser.fullName}!
        </h2>
        <button
          className="dashboard__edit-btn"
          onClick={() => navigate("edit")}
        >
          Editar perfil
        </button>
      </header>
      <div className="dashboard__content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
