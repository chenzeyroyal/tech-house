import Section from "@/shared/ui/Section/Section";
import { useSearchParams } from "react-router-dom";
import Products from "../Products";
import NotFound from "@/shared/ui/NotFound";
import { useContext } from "react";
import { ProductsContext } from "@/entities/product/model/context/ProductsContext/ProductsContext";
import { useFiltersState } from "@/features/filters/model/hooks/useFiltersState";

const SEARCH_KEY = "search";

const SearchResult = () => {
  const { products } = useContext(ProductsContext);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get(SEARCH_KEY);

  const searchedProducts = products.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery)
  );
  const { filteredProducts } = useFiltersState(searchedProducts);

  const isSearchedProductsEmpty = searchedProducts.length === 0;

  return (
    <Section
      className="container"
      title="Результаты поиска"
      meta={`(${filteredProducts.length})`}
    >
      {isSearchedProductsEmpty ? (
        <NotFound
          title="Товары не найдены"
          subtitle="Товаров с таким названием не найдено"
          icon="sad"
          buttonLabel="На главную"
          to="/"
        />
      ) : (
        <Products items={filteredProducts} />
      )}
    </Section>
  );
};

export default SearchResult;
