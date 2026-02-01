import Section from "@/shared/ui/Section/Section";
import ProductList from "@/entities/product/ui/ProductList";
import FilterPanel from "@/features/filters/ui/FilterPanel";
import NotFound from "@/shared/ui/NotFound";
import styles from "./Products.module.scss";
import Select from "@/shared/ui/Select";
import { useMemo, useState } from "react";
import Loading from "@/shared/ui/Loading";

const Products = (props) => {
  const { items, isLoading } = props;
  const isItemsEmpty = items?.length === 0;

  const sortList = [
    { value: "price_desc", label: "по убыванию цены" },
    { value: "price_asc", label: "по возрастанию цены" },
    { value: "stock", label: "по наличию" },
  ];

  const [sortBy, setSortBy] = useState("stock");

  const sortedItems = useMemo(() => {
    const itemsCopy = [...items];

    switch (sortBy) {
      case "price_asc":
        return itemsCopy
          .sort((a, b) => a.price - b.price)
          .sort((a, b) => b.stockQuantity - a.stockQuantity);

      case "price_desc":
        return itemsCopy
          .sort((a, b) => b.price - a.price)
          .sort((a, b) => b.stockQuantity - a.stockQuantity);

      default:
        return itemsCopy.sort((a, b) => b.stockQuantity - a.stockQuantity);
    }
  }, [items, sortBy]);

  return (
    <Section>
      <div className={styles.products}>
        <FilterPanel products={sortedItems} />

        <div className={styles.listWrapper}>
          <Select
            className={styles.sortSelect}
            label="Сортировка"
            options={sortList}
            defaultValue={() =>
              sortList.find((option) => option.value === sortBy)
            }
            onChange={(option) => setSortBy(option.value)}
          />
          {isLoading ? (
            <Loading />
          ) : isItemsEmpty ? (
            <NotFound
              title="Товары не найдены"
              subtitle="Попробуйте изменить фильтр или категорию."
              icon="sad"
            />
          ) : (
            <ProductList items={sortedItems} layout="column" />
          )}
        </div>
      </div>
    </Section>
  );
};

export default Products;
