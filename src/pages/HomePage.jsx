import { ProductsComponent } from "../components/ProductsComponent";
import { SearchComponent } from "../components/SearchComponent";
import { FilterComponent } from "../components/FilterComponent";
import { useParams, Outlet } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { BooksContext } from "../contexts/BooksContext";
import Pagination from "../components/Pagination";
import { BackButton } from "../components/BackButton";
import "../styles/HomePageStyle.css";

export const HomePage = () => {
  const { id } = useParams();
  const { books, searchWord, gender } = useContext(BooksContext);
  const url = "/home";

const filteredBooks = books.filter((book)=> (searchWord ? book.titulo.toLowerCase().includes(searchWord.toLowerCase()) : true))
.filter((book)=> (gender ? book.genero.toLowerCase().includes(gender.toLowerCase()) : true));

// Estado para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

    // Si cambia la búsqueda, volvemos a la página 1
    useEffect(() => {
      setCurrentPage(1);
    }, [searchWord]);

  // Índices de los libros a mostrar en la página actual
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <>
      {id && <BackButton url={url} />}
      <div className="home-page">
        <div className="home-filter-option">
        {!id && <SearchComponent />}
        {!id && <FilterComponent/>}
        </div>
        <h1 className="home-page__title">Tu comunidad literaria</h1>
        <div className="home-page__content">
          {id ? (
            <>
              <Outlet />
            </>
          ) : (
            <>
              <ProductsComponent books={currentBooks} />
              {filteredBooks.length === books.length && (
              <Pagination
                totalBooks={books.length}
                booksPerPage={booksPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};