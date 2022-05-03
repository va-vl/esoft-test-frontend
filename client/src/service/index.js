export const removeSpacesFromString = (string) => string.replace(/\s+/g, '');

export const addSpacesToNumber = (num) =>
  removeSpacesFromString(`${num}`).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const parseNumberWithSpaces = (string) => +string.split(' ').join('');

export const formatPrice = (priceNumber) =>
  `Цена: ${addSpacesToNumber(Math.floor(priceNumber / 1000))} тыс. \u20BD`;

export const formatArea = (areaNumber, title) =>
  `${title}: ${addSpacesToNumber(areaNumber)} м\u00b2`;
