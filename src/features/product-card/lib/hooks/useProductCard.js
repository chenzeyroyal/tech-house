import { useContext } from "react";
import { ProductsContext } from "@/entities/product/model/context/ProductsContext/ProductsContext";
import { useLocationController } from "@/shared/lib/hooks/useLocationController";

export const useProductCard = (id) => {
  const { products } = useContext(ProductsContext);
  const { pathname } = useLocationController();

  const product = products?.find((product) => product.id === id);

  const score = (
    product?.reviews.reduce((acc, review) => acc + review.score, 0) /
    product?.reviews.length
  ).toFixed(1);

  const config = {
    "/": "small",
    "/cart": "medium",
    "/favorites": "small",
    [`/store/${id}`]: "large",
  };

  const mode = config[pathname] || "medium";

  const isInStock = product?.stockQuantity > 0;

  return { ...product, mode, score, pathname, isInStock };
};
