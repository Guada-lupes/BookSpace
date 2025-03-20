import { createContext, useState } from "react";
import React from "react";
import { useContext } from "react";
import { BooksContext } from "./BooksContext";

//creamos contexto
export const FavoritesContext = createContext();

//creamos proveedor de contexto
export const FavoritesProvider = ({ children }) => {
  //creamos use para guardar favoritos
  const [favorites, setFavorites] = useState([]);
  //traemos contexto de libros para buscar libro por id
  const { books } = useContext(BooksContext);

  //funcion para añadir a favoritos
  function addFavorites(id) {
    const favoriteBook = books.filter((book) => book.id === id);
    setFavorites([...favorites, { favoriteBook }]);
  }

  //funcion para borrar favoritos
  function deleteFavorites(id) {
    const newFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(newFavorites);
  }

  return (
    <>
      <FavoritesContext.Provider
        value={{ favorites, addFavorites, deleteFavorites }}>
        {children}
      </FavoritesContext.Provider>
    </>
  );
};
