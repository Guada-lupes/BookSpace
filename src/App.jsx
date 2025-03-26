import "./App.css";
<<<<<<< HEAD
import { Routes, Route, Router } from "react-router-dom";
=======
import { Routes, Route } from "react-router-dom";

import { useLocation } from "react-router-dom";

/*Rebe*/
import { Router } from "react-router-dom";
/*Rebe*/
>>>>>>> origin/feature/Rebe/arreglos/Tarea16

//Importación de componentes
import { HomePage } from "./pages/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { DetailsProductComponent } from "./components/DetailsProductComponent";

/*Rebe       import FavoritesPage from "./pages/FavoritesPage";
/*Rebe*/

import DashboardPage from "./pages/DashboardPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import RegisterPage from "./pages/RegisterPage"; // Página de registro
import LoginPage from "./pages/LoginPage"; // Página de inicio de sesión
import LogoutPage from "./pages/LogoutPage"; // Página de cierre de sesión
import RecoverPasswordPage from "./pages/RecoverPasswordPage"; // Página de recuperación de contraseña
import UpdateUserForm from "./components/UpdateUserForm";
import DashboardUserDetails from "./components/DashboardUserDetails";
import AdminPage from "./pages/AdminPage";
import AdminBooksPage from "./pages/AdminBooksPage";
import AddBookForm from "./components/AddBookForm";
import EditBookForm from "./components/EditBookForm";

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />{" "}
        {/* Página de registro */}
        <Route path="/" element={<LoginPage />} />{" "}
        {/* Página de inicio de sesión */}
        <Route path="/logout" element={<LogoutPage />} />{" "}
        {/* Página de cierre de sesión */}
        <Route
          path="/recover-password"
          element={<RecoverPasswordPage />}
        />{" "}
        {/* Página de recuperación de contraseña */}
        <Route path="/home" element={<HomePage />}>
          <Route path=":id" element={<DetailsProductComponent />} />
          {/* <Route path="/home/products" element={<ProductsComponent />} /> */}
        </Route>
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<DashboardUserDetails />} />
          <Route path="edit" element={<UpdateUserForm />} />
        </Route>
        {/* Rutas para admin */}
        <Route path="/admin" element={<AdminPage />}>
          <Route path="books">
            <Route index element={<AdminBooksPage />} />
            <Route path="add" element={<AddBookForm />} />
            <Route path="edit/:id" element={<EditBookForm />} />
          </Route>
        </Route>
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
