import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

export const ProductsComponent = () => {
  //nos traemos la data de libros del contexto
  const { books } = useContext(BooksContext);


  return (
    <div className="library-list">
      {books.map((book) => (
        <div key={book.id} className="library-item">
          <div className="book-img-container"><img className="book-img" src={book.imagen} alt={`imagen libre relacionada con el nombre del libro: ${book.title}`} /></div>
          
          <div className="book-name-container"><p className="book-title">{book.titulo}</p> <p className="book-autor">{book.autor}</p></div>

          <div className="book-genero-container"><p className="book-genero">{book.genero}</p></div>
          <div className="book-rating-container"><p className="book-rating">{book.rating}</p></div>
          
          <div className="book-favoritos-container"></div>
        </div>
      ))}
    </div>
  );
};
