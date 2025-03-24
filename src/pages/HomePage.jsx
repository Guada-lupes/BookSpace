import { ProductsComponent } from "../components/ProductsComponent"
import { DetailsProductComponent } from "../components/DetailsProductComponent";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { BooksContext } from "../contexts/BooksContext";
import Pagination from "../components/Pagination";



export const HomePage = () => {
  const { id } = useParams();
  const { books } = useContext(BooksContext);

// Estado para la paginación
const [currentPage, setCurrentPage] = useState(1);
const booksPerPage = 10;

// Índices de los libros a mostrar en la página actual
const indexOfLastBook = currentPage * booksPerPage;
const indexOfFirstBook = indexOfLastBook - booksPerPage;
const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <>
      {id ? (
        <DetailsProductComponent />
      ) : (
        <>
          <ProductsComponent books={currentBooks} />
          <Pagination
            totalBooks={books.length}
            booksPerPage={booksPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
};