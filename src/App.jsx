import "./App.css";
import { Routes, Route } from "react-router-dom";

//Importación de componentes
import { HomePage } from "./pages/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { DetailsProductComponent } from "./components/DetailsProductComponent";
import DashboardPage from "./pages/DashboardPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/:id" element={<DetailsProductComponent />} />
        </Route>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
