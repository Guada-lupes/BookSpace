import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { BooksProvider } from "./contexts/BooksContext.jsx";
import { FavoritesProvider } from "./contexts/FavoritesContext.jsx";
import { AdminsBooksProvider } from "./contexts/AdminsBooksContext.jsx";
import { UsersProvider } from "./contexts/UsersContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <FavoritesProvider>
        <AdminsBooksProvider>
          <BooksProvider>
            <UsersProvider>
              <App />
            </UsersProvider>
          </BooksProvider>
        </AdminsBooksProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </AuthProvider>
);