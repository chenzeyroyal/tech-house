import { useParams } from "react-router-dom";
import CategoryProducts from "@/widgets/sections/CategoryProducts";

const CategoryPage = () => {
  const { id } = useParams();

  return <CategoryProducts categoryID={id} />;
};

export default CategoryPage;
