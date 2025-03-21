import './App.css';
{/*import { Routes, Route } from "react-router-dom"*/}


import  HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx"
import './App.css'
import { Routes, Route } from "react-router-dom";
//Importación de contextos
import { BooksProvider } from './contexts/BooksContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
//Importación de componentes
import { HomePage } from './pages/HomePage';
import { DetailsProductComponent } from './components/DetailsProductComponent';

function App() {

  return (
    <div>
      <HeaderComponent/>
      
      <FooterComponent/>
    </div>
  )
   {/*<Routes>*/}
    <>
    <FavoritesProvider>
    <BooksProvider>
    <Routes>

{/* Falta importar el componente e insertar el componente LoginPage dentro de las {}
<Route path='/login' element={}/>  */}

{/* Falta importar el componente e insertar el componente RegisterPage dentro de las {
<Route path='/register' element={}/> */}


<Route path='/' element={<HomePage/>}>
<Route path='/:id' element={<DetailsProductComponent/>}/>
</Route>

{/* Falta importar el componente e insertar el componente DashboardPage dentro de las {}
<Route path='/dashboard' element={}/> */}

{/* Falta importar el componente e insertar el componente FavoritesPage dentro de las {}
<Route path='/favorites' element={}/> */}

    {/*</Routes>*/}
  
  
</Routes>
    </BooksProvider>
    </FavoritesProvider>
    </>
  )
}

export default App;

