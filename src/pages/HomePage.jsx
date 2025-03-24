import { ProductsComponent } from "../components/ProductsComponent";
// import { DetailsProductComponent } from "../components/DetailsProductComponent";
import { useParams, Outlet } from "react-router-dom";
import "../styles/HomePageStyle.css";

export const HomePage = () => {
  const { id } = useParams();

  return (
    <div className="home-page">
      <h1 className="home-page__title">Tu comunidad literaria</h1>
      <div className="home-page__content">
        {id ? <Outlet /> : <ProductsComponent />}
      </div>
    </div>
  );
};
