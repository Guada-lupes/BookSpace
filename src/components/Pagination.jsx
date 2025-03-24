import React, { useEffect } from "react";

const Pagination = ({ totalBooks, booksPerPage, setCurrentPage, currentPage }) => {
  const totalPages = Math.ceil(totalBooks / booksPerPage);

  // useEffect para hacer scroll al inicio cada vez que cambia la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse al principio de la página
  }, [currentPage]); // Se ejecuta cada vez que `currentPage` cambia

  return (
    <div>
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        Anterior
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          className={currentPage === pageNumber ? "active" : ""}
        >
          {pageNumber}
        </button>
      ))}

      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;