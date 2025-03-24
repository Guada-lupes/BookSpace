import { FavoritesCartComponent } from "../components/FavoritsCartComponent";
import { EmptyCartComponent } from "../components/EmptyCartComponent";
import React from 'react'
import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { BackButton } from "../components/BackButton";

export const FavoritesPage = () => {
const { favorites }= useContext(FavoritesContext)
const url = "/home";
    
  return (

    <div>
      <BackButton url={url}/>
      {
        favorites.length === 0 ?  <EmptyCartComponent/> : <FavoritesCartComponent/>
      }

    </div>
  )
}
