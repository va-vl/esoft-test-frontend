export const addSpacesToNumberString = (string) =>
  string.replace(/\s+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const parseNumberWithSpaces = (string) => +string.split(' ').join('');
