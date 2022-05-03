import * as service from '@service/';
import { MAX_INPUT_VALUE } from '@constants/';

export const formatInputString = (string) => {
  if (string === '') {
    return string;
  }

  const numericValue = service.parseNumberWithSpaces(string);

  if (isNaN(numericValue)) {
    return string.slice(0, -1);
  }

  return service.addSpacesToNumber(Math.min(numericValue, MAX_INPUT_VALUE));
};
