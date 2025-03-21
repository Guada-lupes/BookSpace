import "./App.css";
import { Routes, Route } from "react-router-dom";

//Importación de componentes
import { HomePage } from './pages/HomePage';
import { FavoritesPage } from './pages/FavoritesPage';
import { DetailsProductComponent } from './components/DetailsProductComponent';

function App() {
  return (
    <>
    <Routes>

            {/* Falta importar el componente e insertar el componente LoginPage dentro de las {}
<Route path='/login' element={}/>  */}

            {/* Falta importar el componente e insertar el componente RegisterPage dentro de las {
<Route path='/register' element={}/> */}

            <Route path="/" element={<HomePage />}>
              <Route path="/:id" element={<DetailsProductComponent />} />
            </Route>

            {/* Falta importar el componente e insertar el componente DashboardPage dentro de las {}
<Route path='/dashboard' element={}/> */}

<Route path='/favorites' element={<FavoritesPage/>}/>

</Routes>
    </>
  );
}

export default App;
