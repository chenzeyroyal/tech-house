export const getFormattedWord = (count) => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `${count} отзыва`;
  }

  if (lastDigit === 1) {
    return `${count} отзыва`;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${count} отзыва`;
  }

  return `${count} отзывов`;
};
