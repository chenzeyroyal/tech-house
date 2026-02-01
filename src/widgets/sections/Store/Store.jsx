import Products from "../Products";
import Section from "@/shared/ui/Section/Section";
import { useContext } from "react";
import { ProductsContext } from "@/entities/product/model/context/ProductsContext/ProductsContext";
import { useFiltersState } from "@/features/filters/model/hooks/useFiltersState";

const Store = () => {
  const { products, isLoadingProducts } = useContext(ProductsContext);

  const { filteredProducts } = useFiltersState(products);

  return (
    <Section className="container" title="Магазин">
      <Products items={filteredProducts} isLoading={isLoadingProducts} />
    </Section>
  );
};

export default Store;
