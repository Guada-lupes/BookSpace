import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { Link } from "react-router-dom";
import { HeartComponent } from "./heartComponent";
import "../styles/FavoritesCartComponentStyle.css"

export const FavoritesCartComponent = () => {
  const { deleteFavorites, favorites } = useContext(FavoritesContext);

  console.log(favorites.map((favorite) => favorite.titulo));

  return (
    <div className="favorites-container">
      {favorites.map((favorite) => (
        <>
          <div key={favorite.id} className="favorite-item">

          <div className="favorite-item-img-container">
            <img
              className="favorite-img"
              src={favorite.imagen}
              alt={`miniatura de la imagen relacionada con el titulo ${favorite.titulo}`}
            />
          </div>
            <div className="favotire-item-options">
            <div className="favorite-item-info">
              <h3 className="favorite-item-title">{favorite.titulo}</h3>
              <p className="favorite-item-autor">{favorite.autor}</p>
            </div>

            {/* Cambiar esto por un icono de corazon acompañado de eliminar de favoritos*/}
            <div className="favorite-item-buttons">
            <Link to={`/home/${favorite.id}`}>
              <button className="details-button">Detalles</button>
            </Link>
            <div className="favorite-item-heart">
            <HeartComponent book={favorite}/>
            </div>
            </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
