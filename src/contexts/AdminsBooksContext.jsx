// src/contexts/AdminsBooksContext.jsx
import { createContext, useState, useEffect } from "react";
import { getAllBooks } from "../services/booksService";

export const AdminsBooksContext = createContext();

export const AdminsBooksProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : getAllBooks();
  });

  const [adminData, setAdminData] = useState({});

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (newBook) => {
    newBook.id = books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1;
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const removeBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const updateBook = (id, newData) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === id ? { ...book, ...newData } : book))
    );
  };

  const [searchWord, setSearchWord] = useState("");

  return (
    <AdminsBooksContext.Provider
      value={{
        books,
        adminData,
        setAdminData,
        addBook,
        removeBook,
        updateBook,
        searchWord,
        setSearchWord,
      }}
    >
      {children}
    </AdminsBooksContext.Provider>
  );
};
