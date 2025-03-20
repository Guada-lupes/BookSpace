import { ProductsComponent } from "../components/ProductsComponent"
import { DetailsProductComponent } from "../components/DetailsProductComponent";
import { useParams } from "react-router-dom";

export const HomePage = () => {
  const {id} = useParams();

  return (
    <>
    {
      id ? (<DetailsProductComponent/>) :(<ProductsComponent/>)
    }
    
    
    </>

  )
}
