import { removeDiacritics } from "./removeDiacritics";

export const looseStringCompare = (value: string, searchValue: string) => {
  const parsedValue = removeDiacritics(value.toLowerCase());
  const parsedSearchValue = removeDiacritics(searchValue.toLowerCase());
  return parsedValue.includes(parsedSearchValue);
};
