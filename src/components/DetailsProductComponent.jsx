import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { useParams } from "react-router-dom";

export function DetailsProductComponent() {
  //importamos useParams y extraemos el id de la url
  const id = useParams();
  //traemos la data de libros del contexto
  const { books } = useContext(BooksContext);
  //creamos una constante que filtre los libros según el id de la url
  const book = books.find((book) => book.id === id);

  //renderizamos detalles
  return (
    <div className="book-details-container">
      <div className="book-details-img-continaer">
        <img
          src={book.imagen}
          alt={`imagen relacionada con el título del libro ${book.titulo}`}
        />
      </div>

      <div className="book-details-autor">
        <p className="book-details-titulo">{book.titulo}</p>
        <p className="book-details-autor">{book.autor}</p>
      </div>

      <p>{`Género: ${book.genero}`}</p>
      <p>{`ISBN: ${book.isbn}`}</p>
      <p>{`Rating: {book.rating}`}</p>
      <p>{`Sinopsis: ${book.sinopsis}`}</p>
    </div>
  );
}
