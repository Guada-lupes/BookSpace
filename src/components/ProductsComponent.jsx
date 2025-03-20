import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { Link } from "react-router-dom";

export const ProductsComponent = () => {
  //nos traemos la data de libros del contexto
  const { books } = useContext(BooksContext);

  return (
    <div className="library-list">
      {books.map((book) => (
        <div key={book.id} className="library-item">
          <div className="book-img-container">
            <img
              className="book-img"
              src={book.imagen}
              alt={`imagen libre relacionada con el nombre del libro: ${book.title}`}
            />
          </div>

          <div className="book-name-container">
            <p className="book-title">{book.titulo}</p>{" "}
            <p className="book-autor">{book.autor}</p>
          </div>

          <div className="book-genero-container">
            <p className="book-genero">{book.genero}</p>
          </div>
          <div className="book-rating-container">
            <p className="book-rating">{book.rating}</p>
          </div>

          {/* <Link to={`/${book.id}`}>
            <button className="book-masinfo-buttton">Más info</button>
          </Link> */}
          <div className="book-favoritos-container">
            {/* corazon vacio
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
corazon lleno
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg> */}
          </div>
        </div>
      ))}
    </div>
  );
};
