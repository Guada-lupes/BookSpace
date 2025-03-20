import './App.css'
import { Routes, Route } from "react-router-dom";
import { BooksProvider } from './contexts/BooksContext';
import { HomePage } from './pages/HomePage';
import { DetailsProductComponent } from './components/DetailsProductComponent';

function App() {

  return (
    <>
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

</Routes>
    </BooksProvider>
    
    </>
  )
}

export default App
