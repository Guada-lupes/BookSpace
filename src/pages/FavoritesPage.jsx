import { FavoritesCartComponent } from "../components/FavoritsCartComponent";
import { EmptyCartComponent } from "../components/EmptyCartComponent";
import React from 'react'
import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

export const FavoritesPage = () => {
const { favorites }= useContext(FavoritesContext)
  return (
    
    <div>
      {
        favorites.length === 0 ?  <EmptyCartComponent/> : <FavoritesCartComponent/>
      }

    </div>
  )
}
