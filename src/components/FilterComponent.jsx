import React from 'react'
import { useContext, useEffect } from 'react'
import { BooksContext } from '../contexts/BooksContext'
import { useLocation } from 'react-router-dom'
import "../styles/FilterComponetStyle.css";

export const FilterComponent = () => {

    const { gender, setGender} = useContext(BooksContext);
    const location = useLocation();

function selectHandle(value) {
setGender(value)
}
  useEffect (() => {
    setGender ("");
  }, [location.pathname, setGender]); 

  return (
    <div className='form-container'>
        <form className='form-filter'>
            <select className='form-select' value={gender} onChange={(e)=>selectHandle(e.target.value)} id="form-select" name="filters">
                <option value="" >Filtrar categoría</option>
                <option value="realismo">Realismo mágico</option>
                <option value="misterio">Misterio</option>
                <option value="experimental">Literatura experimental</option>
                <option value="cuentos">Cuentos</option>
                <option value="ciencia">Ciencia ficción</option>
                <option value="novela">Novela</option>
                <option value="ensayo">Ensayo</option>
                <option value="infantil">Literatura infantil</option>
                <option value="suspence">Suspense</option>
                <option value="fantasia">Fantasía</option>
                <option value="satira">Sátira política</option>
                <option value="terror">Terror</option>
                <option value="thriller">Thriller</option>
                <option value="autoayuda">Autoayuda</option>
            </select>
        </form>
    </div>
  )
}
