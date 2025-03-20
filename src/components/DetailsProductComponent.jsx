import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { useParams } from "react-router-dom";

export function DetailsProductComponent() {
  //importamos useParams y extraemos el id de la url
  const id = useParams();
  //como id es un objeto, extraemos sólo su valor
  const idNumber = id.id
  //traemos la data de libros del contexto
  const { books } = useContext(BooksContext);

  //comprobamos que books no está vacio
  if (!books || books.length === 0) {
    return <div className="details-loading"><p>Cargando libros...</p></div>;
  }
  //creamos una constante que filtre los libros según el id de la url. Verificamos que ambos id sean number
  const book = books.find((book) => Number(book.id) === Number(idNumber));

  //comprobamos que el libro ha sido encontrado
  if (!book) {
    return <div className="details-not-found"><p>Libro no encontrado</p></div>;
  }
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
      <p>{`Rating: ${book.rating}`}</p>
      <p>{`Sinopsis: ${book.sinopsis}`}</p>
    </div>
  );
}
