import { useParams } from "react-router-dom";
import ProductDetails from "@/widgets/sections/ProductDetails";

const ProductPage = () => {
  const { id } = useParams();

  return <ProductDetails productID={id} />;
};

export default ProductPage;
