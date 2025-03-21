import { createContext, useState } from "react";
import React from "react";

//creamos contexto
export const FavoritesContext = createContext();

//creamos proveedor de contexto
export const FavoritesProvider = ({ children }) => {
  //creamos use para guardar favoritos
  const [favorites, setFavorites] = useState([]);


  //funcion para añadir a favoritos
  function addFavorites(book) {

    console.log("hola");
    console.log(book);
    
    setFavorites((prevFavorites)=>{
      const favoriteBook = prevFavorites.find((favorite)=> favorite.id === book.id);

      return favoriteBook ? prevFavorites : [...prevFavorites, book]
    })
    console.log(favorites);
    
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
