// returns the first letter of word in upperCase
export const capitalizeFirstLetter = (txt: string): string => {
  return txt.charAt(0).toUpperCase() + txt.slice(1);
};
