export function getElement<T extends HTMLElement>(query: string): T {
  const element = document.querySelector<T>(query);
  if (element === null) throw new Error(`Element not found: ${query}`);
  return element;
}

export const elements = {
  form: getElement<HTMLFormElement>("form"),
  searchInput: getElement<HTMLInputElement>("#search"),
  loadingSpinner: getElement<SVGElement & HTMLElement>("#loading-spinner"),
  countryList: getElement<HTMLDivElement>("#country-list"),
  state: getElement<HTMLDivElement>("#state"),
  button: getElement<HTMLButtonElement>("button[type=submit]"),
};
