import React, { useState, useContext } from "react";
import { BooksContext } from "../context/BooksContext"; // Importamos el contexto de libros

const Pagination = () => {
  // Accedemos a los libros a través del contexto de BooksContext
  const { books } = useContext(BooksContext);

  // Estado que almacena la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Número de libros que queremos mostrar por página
  const booksPerPage = 10;

  // Función que cambia la página actual al número de página seleccionado
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculamos el índice del último libro que se va a mostrar en la página actual
  const indexOfLastBook = currentPage * booksPerPage;

  // Calculamos el índice del primer libro que se va a mostrar en la página actual
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  // Obtenemos los libros que se deben mostrar en la página actual
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Calculamos el número total de páginas, redondeando hacia arriba
  const totalPages = Math.ceil(books.length / booksPerPage);

  return (
    <div>
      {/* Mostramos los libros de la página actual */}
      <div>
        {currentBooks.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3> {/* Título del libro */}
            <p>{book.author}</p> {/* Autor del libro */}
          </div>
        ))}
      </div>

      {/* Contenedor de los botones de paginación */}
      <div>
        {/* Botón para navegar a la página anterior */}
        <button
          onClick={() => paginate(currentPage - 1)} // Disminuir la página actual
          disabled={currentPage === 1} // Deshabilitar el botón si estamos en la primera página
        >
          Anterior
        </button>

        {/* Generamos un botón para cada número de página */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)} // Cambiar a la página seleccionada
              className={currentPage === pageNumber ? "active" : ""} // Resaltar el botón de la página activa
            >
              {pageNumber} {/* Mostrar el número de la página */}
            </button>
          )
        )}

        {/* Botón para navegar a la siguiente página */}
        <button
          onClick={() => paginate(currentPage + 1)} // Aumentar la página actual
          disabled={currentPage === totalPages} // Deshabilitar el botón si estamos en la última página
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Pagination;