import { useState, useEffect, useContext } from "react";
import { BooksContext } from "../contexts/BooksContext"; // Importamos el contexto para obtener los libros

// Componente de Paginación
export default function Paginacion() {
  const ITEMS_PER_PAGE = 10; // Definimos cuántos libros mostrar por página

  // Usamos el contexto para obtener los libros
  const { books } = useContext(BooksContext);

  // Calculamos cuántas páginas necesitamos, usando Math.ceil para redondear hacia arriba
  // Tenemos 61 libros y mostramos 10 por página, necesitamos 7 páginas
  const totalPages = Math.ceil(books.length / ITEMS_PER_PAGE);

  // Estado para manejar la página actual en la que estamos
  const [currentPage, setCurrentPage] = useState(1); // Inicializamos en la página 1

  // Aquí calculamos el índice del primer libro que vamos a mostrar en la página actual
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  // Extraemos los libros que deben mostrarse en la página actual
  const selectedBooks = books.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Función para cambiar de página
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber); // Cambiamos la página actual si es válida
    }
  };
  return (
    <div>
      <h2>Lista de Libros</h2>
      {/* Si no hay libros para mostrar, mostramos un mensaje */}
      {selectedBooks.length === 0 ? (
        <p>No hay libros disponibles en este momento.</p>
      ) : (
        <ul>
          {/* Recorremos los libros seleccionados y los mostramos */}
          {selectedBooks.map((book) => (
            <li key={book.id}>{book.titulo}</li>
          ))}
        </ul>
      )}
      
      <div>
        {/* Botón de página anterior: solo se puede hacer clic si no estamos en la primera página */}
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>

        {/* Selector de páginas: permite elegir la página a la que ir */}
        <select value={currentPage} onChange={(e) => goToPage(Number(e.target.value))}>
          {/* Creamos un listado de páginas con Array.from, pasando el total de páginas */}
          {Array.from({ length: totalPages }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              Página {i + 1}
            </option>
          ))}
        </select>

         {/* Botón de página siguiente: solo se puede hacer clic si no estamos en la última página */}
         <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
}