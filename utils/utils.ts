// returns the first letter of word in upperCase
export const capitalizeFirstLetter = (txt: string): string => {
  return txt.charAt(0).toUpperCase() + txt.slice(1);
};

/** Scrolls to an element. The element should have id */
export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  setTimeout(() => {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
};
