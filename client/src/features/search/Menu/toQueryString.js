import * as service from '@service';

export const toQueryString = (state) =>
  Object.entries(state)
    .reduce((result, [key, value]) => {
      if (value.length === 0) {
        return result;
      }

      if (Array.isArray(value)) {
        value.forEach((val) => {
          result.push(`${key}[]=${service.removeSpacesFromString(val)}`);
        });
        return result;
      }

      result.push(`${key}=${service.removeSpacesFromString(value)}`);
      return result;
    }, [])
    .join('&');
