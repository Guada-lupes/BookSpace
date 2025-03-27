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
        {/*<Route path="/logout" element={<LogoutButton />} /> {/*Botón de logout */}
   
       

        <Route path="/home" element={<HomePage />}>
          <Route path=":id" element={<DetailsProductComponent />} />
          {/* <Route path="/home/products" element={<ProductsComponent />} /> */}
        </Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="logout" element={<LogoutButton />}></Route>
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      <FooterComponent />
    


    </>
  );
};
export default App;