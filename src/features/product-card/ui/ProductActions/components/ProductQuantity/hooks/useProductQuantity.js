import { useCallback } from "react";

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 99;

export const useProductQuantity = (id, updateQuantity) => {
  const handleQuantityChange = useCallback(
    (e) => {
      let value = parseInt(e.target.value) || 1;
      if (value > MAX_QUANTITY) {
        value = MAX_QUANTITY;
      }
      if (value < MIN_QUANTITY) {
        value = MIN_QUANTITY;
      }
      updateQuantity(id, value);
    },
    [id, updateQuantity]
  );

  const handleIncrement = useCallback(
    (currentQuantity) => {
      updateQuantity(id, currentQuantity + 1);
    },
    [id, updateQuantity]
  );

  const handleDecrement = useCallback(
    (currentQuantity) => updateQuantity(id, currentQuantity - 1),
    [id, updateQuantity]
  );

  return {
    MIN_QUANTITY,
    MAX_QUANTITY,
    handleQuantityChange,
    handleIncrement,
    handleDecrement,
  };
};
