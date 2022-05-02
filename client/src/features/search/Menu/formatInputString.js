import * as service from '@service/';
import { MAX_INPUT_VALUE } from '@constants/';

export const formatInputString = (string) => {
  if (string === '') {
    return string;
  }

  const char = string[string.length - 1];

  if (char && !/[0-9]/.test(char)) {
    return string.slice(0, -1);
  }

  const numericValue = Math.min(
    service.parseNumberWithSpaces(string),
    MAX_INPUT_VALUE
  );

  return service.addSpacesToNumberString(`${numericValue}`);
};
