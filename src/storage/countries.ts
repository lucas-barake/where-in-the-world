import { api } from "../api";
import { type Country } from "../types/countries";

export const countries: Country[] = [];

const key = "all-countries";

export async function initializeLocalStorage(): Promise<void> {
  const storedCountries = localStorage.getItem(key);

  if (storedCountries === null) {
    const fetchedCountries = await api.getAllCountries();
    localStorage.setItem(key, JSON.stringify(fetchedCountries));
    countries.push(...fetchedCountries);
  } else {
    countries.push(...JSON.parse(storedCountries));
  }
}
