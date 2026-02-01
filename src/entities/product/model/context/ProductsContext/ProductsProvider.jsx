import { ProductsContext } from "./ProductsContext";
import useProducts from "../../hooks/useProducts";

export const ProductsProvider = (props) => {
  const { children } = props;

  const { products, isLoadingProducts } = useProducts();

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoadingProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
