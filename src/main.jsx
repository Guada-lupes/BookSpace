import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { BooksProvider } from "./contexts/BooksContext.jsx";
import { FavoritesProvider } from "./contexts/FavoritesContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavoritesProvider>
      <BooksProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BooksProvider>
    </FavoritesProvider>
  </BrowserRouter>
);
