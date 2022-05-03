export const removeSpacesFromString = (string) => string.replace(/\s+/g, '');

export const addSpacesToNumber = (num) =>
  removeSpacesFromString(`${num}`).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const parseNumberWithSpaces = (string) => +string.split(' ').join('');
