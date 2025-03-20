import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { Link } from "react-router-dom";

export const FavoritesCartComponent = () => {
  const { deleteFavorites, favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-container">
          <h1 className="favorites-container-title">Mis favoritos</h1>
      {favorites.map((favorite) => (
        <>
          <div className="favorite-item">
            <div className="favorite-item-info">
            <h3 className="favorite-item-title">{favorite.titulo}</h3>
            <p className="favorite-item-autor">{favorite.autor}</p>
            </div>
            <div className="favorite-item-img-container">
            <img className="favorite-img" src={favorite.imagen} alt={`miniatura de la imagen relacionada con el titulo ${favorite.titulo}`} />
            </div>
            <button onClick={() => deleteFavorites(favorite.id)}>Eliminar</button>
            <Link to={`/${favorite.id}`}>
            <button>Detalles</button>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};
