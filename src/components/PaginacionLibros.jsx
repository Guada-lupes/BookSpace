import { useState, useEffect, useContext } from "react";
import { BooksContext } from "../contexts/BooksContext"; // Usamos el contexto de los libros

export default function Paginacion() {
  const ITEMS_PER_PAGE = 10; // Número de libros por página
  const { books } = useContext(BooksContext); // Accedemos a los libros desde el contexto

  // Calcular el número total de páginas
  const totalPages = Math.floor((books.length + ITEMS_PER_PAGE - 1) / ITEMS_PER_PAGE); // Redondeamos hacia abajo

  const [currentPage, setCurrentPage] = useState(1); //página actual por defecto la 1
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE; // El índice del primer libro de la página
  const selectedBooks = books.slice(startIndex, startIndex + ITEMS_PER_PAGE); // Los libros que se deben mostrar en la página actual

  