import * as service from '@service';

export const toQueryString = (state) =>
  Object.entries(state).reduce((result, [key, value]) => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return result;
    }
    if (Array.isArray(value)) {
      return (result += value.reduce((r, v) => (r += `${key}[]=${v}&`), ''));
    }
    if (key === 'sort') {
      return (result += `${key}=${value}&`);
    }
    return (result += `${key}=${service.parseNumberWithSpaces(value)}&`);
  }, '');
