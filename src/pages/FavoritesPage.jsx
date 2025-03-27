import { FavoritesCartComponent } from "../components/FavoritsCartComponent";
import { EmptyCartComponent } from "../components/EmptyCartComponent";
import React from "react";
import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { BackButton } from "../components/BackButton";
import "../styles/FavoritesPageStyle.css";

export const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  const url = "/home";

  return (
    <>
      <BackButton url={url} />
      <section className="favorite-section">
      <h1 className="favorites-container-title">Mis favoritos</h1>
        <div className="favorite-main-container">
        {favorites.length === 0 ? (
          <EmptyCartComponent />
        ) : (
          <FavoritesCartComponent />
        )}
        </div>
      </section>
    </>
  );
};
