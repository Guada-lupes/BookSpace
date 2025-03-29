import { ProductsComponent } from "../components/ProductsComponent";
import { SearchComponent } from "../components/SearchComponent";
// import { DetailsProductComponent } from "../components/DetailsProductComponent";
import { useParams, Outlet } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { BooksContext } from "../contexts/BooksContext";
import Pagination from "../components/Pagination";
import { BackButton } from "../components/BackButton";
import "../styles/HomePageStyle.css";

export const HomePage = () => {
  const { id } = useParams();
  const { books, searchWord } = useContext(BooksContext);
  const url = "/home";
  //constante que filtra por palabra en cado de que haya búsqueda
  const filteredBooks = searchWord
    ? books.filter((book) =>
        book.titulo.toLowerCase().includes(searchWord.toLowerCase())
      )
    : books;

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
        {!id && <SearchComponent />}
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