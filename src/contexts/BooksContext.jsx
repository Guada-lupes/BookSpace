import { createContext, useState, useEffect } from "react"
import { getAllBooks } from "../services/booksService";

//creamos el contexto
export const BooksContext = createContext();

//creamos el proovedor de contexto
export const BooksProvider = ({children}) => {
//esta useState guardará la data de libros
    const [books, setBooks] = useState([])
    
//simulamos la peticion a la api y guardamos en books la data
useEffect(()=>{

setBooks(getAllBooks())
}, [])

//guardará la palabra para filtrar la busqueda
const [searchWord, setSearchWord] = useState("")

const [gender, setGender] = useState("")

  return (
    <BooksContext.Provider value={{books, searchWord, setSearchWord, gender, setGender}}>
        {children}
    </BooksContext.Provider>
  )
}
