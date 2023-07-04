import { Country } from "../types/countries";

export const api = {
  async getCountriesByName(name: string): Promise<Country[]> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  },
  async getCountryByCode(code: string): Promise<Country[]> {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const countries = await response.json();
    return countries;
  },
  async getAllCountries(): Promise<Country[]> {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const countries = await response.json();
    return countries;
  },
};
