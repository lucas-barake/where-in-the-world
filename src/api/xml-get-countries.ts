import { type Country } from "../types/countries";

export type FetchError = {
  status: number;
  message: string;
};

export function xmlGetCountries(nameQuery: string): Promise<Country[]> {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${nameQuery}`);
    request.onload = () => {
      if (request.status === 200) {
        const countries = JSON.parse(request.response);
        resolve(countries);
      } else {
        const error = JSON.parse(request.response);
        reject(error);
      }
    };
    request.send();
  });
}
