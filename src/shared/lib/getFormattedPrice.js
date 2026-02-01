export const getFormattedPrice = (price) => {
  return price?.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    currencyDisplay: "symbol",
  });
};
