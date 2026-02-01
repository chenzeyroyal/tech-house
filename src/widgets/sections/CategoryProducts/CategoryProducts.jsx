import { useCategories } from "@/entities/product/model/hooks/useCategories";
import Section from "@/shared/ui/Section/Section";
import Products from "../Products";

import styles from "./CategoryProducts.module.scss";
import { useFiltersState } from "@/features/filters/model/hooks/useFiltersState";
import { useContext, useMemo } from "react";
import { ProductsContext } from "@/entities/product/model/context/ProductsContext/ProductsContext";

const CategoryProducts = (props) => {
  const { categoryID } = props;

  const { products, isLoadingProducts } = useContext(ProductsContext);
  const { categories } = useCategories(categoryID);

  const categoryProducts = useMemo(() => {
    return products.filter((product) => product.categoryId === categoryID);
  }, [products, categoryID]);

  const { filteredProducts } = useFiltersState(categoryProducts);

  return (
    <Section
      className={(styles.categoryProducts, "container")}
      title={categories[0]?.title}
    >
      <Products items={filteredProducts} isLoading={isLoadingProducts} />
    </Section>
  );
};

export default CategoryProducts;
