import "./App.css";
import { Routes, Route } from "react-router-dom";

//Importación de componentes
import { HomePage } from "./pages/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { DetailsProductComponent } from "./components/DetailsProductComponent";
import DashboardPage from "./pages/DashboardPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import RegisterPage from "./pages/RegisterPage"; // Página de registro
import LoginPage from "./pages/LoginPage"; // Página de inicio de sesión
import LogoutPage from "./pages/LogoutPage"; // Página de cierre de sesión
import RecoverPasswordPage from "./pages/RecoverPasswordPage"; // Página de recuperación de contraseña
import { ProductsComponent } from "./components/ProductsComponent";

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
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
