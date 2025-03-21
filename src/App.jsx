import "./App.css";
import { Routes, Route } from "react-router-dom";

//Importación de contextos
import { BooksProvider } from "./contexts/BooksContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

//Importación de páginas
import { HomePage } from "./pages/HomePage";

//Importación de componentes
import { DetailsProductComponent } from "./components/DetailsProductComponent";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";

function App() {
  return (
    <>
      {/* Proveedor de contexto de Favoritos */}
      <FavoritesProvider>
        {/* Proveedor de contexto de los libros */}
        <BooksProvider>
          <Routes>
            <HeaderComponent />

            {/* Falta importar el componente e insertar el componente LoginPage dentro de las {}
<Route path='/login' element={}/>  */}

            {/* Falta importar el componente e insertar el componente RegisterPage dentro de las {
<Route path='/register' element={}/> */}

            <Route path="/" element={<HomePage />}>
              <Route path="/:id" element={<DetailsProductComponent />} />
            </Route>

            {/* Falta importar el componente e insertar el componente DashboardPage dentro de las {}
<Route path='/dashboard' element={}/> */}

            {/* Falta importar el componente e insertar el componente FavoritesPage dentro de las {}
<Route path='/favorites' element={}/> */}

            {/*</Routes>*/}

            <FooterComponent />
          </Routes>
        </BooksProvider>
      </FavoritesProvider>
    </>
  );
}

export default App;
