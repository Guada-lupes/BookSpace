import { createContext, useState, useEffect } from "react"
import { getAllBooks } from "../services/booksService";

export const BooksContext = createContext();

export const BooksProvider = ({children}) => {

    const [books, setBooks] = useState([])

useEffect(()=>{

setBooks(getAllBooks())

}, [])

console.log(books);

  return (
    <BooksContext.Provider value={{books}}>
        {children}
    </BooksContext.Provider>
  )
}
