import { useBrands } from "@/entities/product/model/hooks/useBrands";
import { useCategories } from "@/entities/product/model/hooks/useCategories";

export const useFilterConfig = () => {
  const { brands } = useBrands();
  const { categories } = useCategories();

  return {
    brands: {
      title: "Бренды",
      items: brands,
      matcher: (product, selected) => selected.includes(product.brandId),
    },

    categories: {
      title: "Категории",
      items: categories,
      matcher: (product, selected) => selected.includes(product.categoryId),
    },

    stock: {
      title: "Наличие",
      subTitle: "Только в наличии",
      matcher: (product) => product.stockQuantity > 0,
    },

    minPrice: {
      matcher: (product, selected) => product.price >= selected,
    },

    maxPrice: {
      matcher: (product, selected) => product.price <= selected,
    },
  };
};
