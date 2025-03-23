import "./App.css";
import { Routes, Route } from "react-router-dom";

//Importación de componentes
import { HomePage } from "./pages/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { DetailsProductComponent } from "./components/DetailsProductComponent";
import DashboardPage from "./pages/DashboardPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
// Importamos las dependencias necesarias para la navegación y los contextos
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Proveedor de autenticación
import { BooksProvider } from "./context/BooksContext"; // Proveedor de libros

// Importamos las páginas y componentes que usaremos en las rutas
import Register from "./pages/Register"; // Página de registro
import Login from "./pages/Login"; // Página de inicio de sesión
import Logout from "./pages/Logout"; // Página de cierre de sesión
import RecoverPassword from "./pages/RecoverPassword"; // Página de recuperación de contraseña
import Pagination from "./components/Pagination"; // Componente de paginación

function App() {
  return (
    // Envolvemos toda la aplicación con `AuthProvider` para gestionar la autenticación
    <AuthProvider>
      {/* `BooksProvider` se encarga de compartir los datos de libros en toda la app */}
      <BooksProvider>
        {/* `Router` permite la navegación entre páginas */}
        <Router>
          {/* `Routes` define las rutas disponibles en la aplicación */}
          <Routes>
            {/* Rutas para la autenticación */}
            <Route path="/register" element={<Register />} /> {/* Página de registro */}
            <Route path="/login" element={<Login />} /> {/* Página de inicio de sesión */}
            <Route path="/logout" element={<Logout />} /> {/* Página de cierre de sesión */}
            <Route path="/recover-password" element={<RecoverPassword />} /> {/* Página de recuperación de contraseña */}

            {/* Ruta para la paginación de libros */}
            <Route path="/pagination" element={<Pagination />} /> {/* Componente de paginación */}
          </Routes>
        </Router>
      </BooksProvider>
    </AuthProvider>
  );
}

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        {/* Falta importar el componente e insertar el componente LoginPage dentro de las {}
<Route path='/login' element={}/>  */}

        {/* Falta importar el componente e insertar el componente RegisterPage dentro de las {
<Route path='/register' element={}/> */}

        <Route path="/" element={<HomePage />}>
          <Route path="/:id" element={<DetailsProductComponent />} />
        </Route>
        <Route path="/dashboard" element={<DashboardPage/>}>
        </Route>
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
