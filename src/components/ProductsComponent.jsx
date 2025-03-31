import { useContext, useState } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { Link } from "react-router-dom";
import { HeartComponent } from "./heartComponent";
import "../styles/ProductsComponentStyle.css";

export const ProductsComponent = ({ books }) => {
  // Aquí cambiamos el uso de useContext por prop

  //marcar en el libro si está dentro de favoritos
  const { favorites, addFavorites, deleteFavorites } = useContext(FavoritesContext);


  return (
    // PEPE
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
            <p className="book-title">{book.titulo}</p>
            <p className="book-autor">{book.autor}</p>
          </div>

          <div className="book-genero-container">
            <p className="book-genero">{book.genero}</p>
          </div>
          <div className="book-rating-container">
            <p className="book-rating">{book.rating}</p>
          </div>

          <Link to={`/home/${book.id}`}>
            <button className="book-masinfo-buttton">Detalles</button>
          </Link>
          <div className="book-favoritos-container">
            <HeartComponent book={book}/>
          </div>
        </div>
      ))}
    </div>
  );
};
