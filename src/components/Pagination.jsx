import React, { useEffect } from "react";
import "../styles/Pagination.css"

const Pagination = ({ totalBooks, booksPerPage, setCurrentPage, currentPage }) => {
  const totalPages = Math.ceil(totalBooks / booksPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);



  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const renderPageButtons = () => {
    const pages = [];

    // Siempre mostrar la página 1
    pages.push(
      <button
        key={1}
        onClick={() => handlePageClick(1)}
        className={currentPage === 1 ? "active" : ""}
      >
        1
      </button>
    );

    // Mostrar puntos suspensivos después del 1 si no estamos cerca de la página 2
    if (currentPage > 2) {
      pages.push(<span key="start-ellipsis">...</span>);
    }

    // Mostrar la página actual si no es la 1 ni la última
    if (currentPage !== 1 && currentPage !== totalPages) {
      pages.push(
        <button key={currentPage} className="active">
          {currentPage}
        </button>
      );
    }

    // Mostrar puntos suspensivos antes de la última página si estamos lejos del final
    if (currentPage < totalPages - 1) {
      pages.push(<span key="end-ellipsis">...</span>);
    }

    // Siempre mostrar la última página (si no es igual a la primera)
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageClick(totalPages)}
          className={currentPage === totalPages ? "active" : ""}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button className="pagination-button"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      {renderPageButtons()}

      <button className="pagination-button"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;