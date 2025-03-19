import { useContext } from "react"
import { BooksContext } from "../contexts/BooksContext"

export const ProductsComponent = () => {

const {books} = useContext(BooksContext);

console.log(books);

  return (
    <div>{
        books.map((libro)=>
        (<p key={libro.id}>{libro.titulo}</p>))}</div>
  )
}
