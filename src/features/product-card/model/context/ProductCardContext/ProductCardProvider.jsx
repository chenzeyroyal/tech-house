import { ProductCardContext } from "./ProductCardContext";

export const ProductCardProvider = (props) => {
  const { children, ...productData } = props;

  return (
    <ProductCardContext.Provider value={productData}>
      {children}
    </ProductCardContext.Provider>
  );
};
