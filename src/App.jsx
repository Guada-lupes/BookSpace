import "./App.css";
import { Routes, Route } from "react-router-dom";

//Importación de componentes
import { HomePage } from "./pages/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { DetailsProductComponent } from "./components/DetailsProductComponent";
import LogoutButton from "./components/LogoutButton";
/*Rebe       import FavoritesPage from "./pages/FavoritesPage";
/*Rebe*/

import DashboardPage from "./pages/DashboardPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import RegisterPage from "./pages/RegisterPage"; // Página de registro
import LoginPage from "./pages/LoginPage"; // Página de inicio de sesión

import UpdateUserForm from "./components/UpdateUserForm";
import DashboardUserDetails from "./components/DashboardUserDetails";
import AdminPage from "./pages/AdminPage";
import AdminBooksPage from "./pages/AdminBooksPage";
import AddBookForm from "./components/AddBookForm";
import EditBookForm from "./components/EditBookForm";
import AdminUsersPage from "./pages/AdminUsersPage";
import EditUserForm from "./components/EditUserForm";

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />{" "}
        {/* Página de registro */}
        <Route path="/" element={<LoginPage />} />{" "}
        {/* Página de inicio de sesión */}
        {/*<Route path="/logout" element={<LogoutButton />} /> {/*Botón de logout */}
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
          <Route path="users">
            <Route index element={<AdminUsersPage />} />
            <Route path="edit/:id" element={<EditUserForm />} />
          </Route>
        </Route>
        <Route path="logout" element={<LogoutButton />}></Route>
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      <FooterComponent />
      {/*Rebe
    </Router>
    {/*Rebe*/}
    </>
  );
}
export default App;
