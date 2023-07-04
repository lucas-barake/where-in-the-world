// import { api } from "../api";
import { countries } from "../storage/countries";
import { Country } from "../types/countries";
import { elements, getElement } from "./elements";

export function renderLearnMore(country: Country): void {
  elements.countryList.innerHTML = "";

  const parentDiv = document.createElement("div");
  parentDiv.className = "flex flex-col items-center justify-between gap-4 px-24 mb-20";
  parentDiv.id = "learn-more";

  const backButton = document.createElement("button");
  backButton.type = "button";
  backButton.className = "px-2 py-1 bg-[#2b3743] text-medium text-xs shadow-md rounded-md";
  backButton.textContent = "← Back";
  backButton.onclick = () => {
    getElement<HTMLDivElement>("div#learn-more").remove();
  };
  parentDiv.appendChild(backButton);

  parentDiv.insertAdjacentHTML(
    "beforeend",
    `
    <img
        src="${country.flags.svg}" />
        
      <h1>${country.name.common}</h1>

      <p class="text-sm font-light"><span class="font-medium">Native Name:</span> ${
        Object.values(
          country.name.nativeName ?? {
            common: "N/A",
          }
        ).at(0)?.common
      }</p>

      <p class="text-sm font-light"><span class="font-medium">Population:</span> ${country.population.toLocaleString()}</p>

      <p class="text-sm font-light"><span class="font-medium">Region:</span> ${country.region}</p>

      <p class="text-sm font-light"><span class="font-medium">Sub Region:</span> ${
        country.subregion
      }</p>

      <p class="text-sm font-light"><span class="font-medium">Capital:</span> ${
        country.capital ?? "N/A"
      }</p>

      <p class="text-sm font-light"><span class="font-medium">Top Level Domain:</span> ${
        country.tld?.at(0) ?? "N/A"
      }</p>

      <p class="text-sm font-light"><span class="font-medium">Currencies:</span> ${Object.values(
        country.currencies ?? {}
      )
        .map((currency) => `(${currency.symbol}) ${currency.name}`)
        .join(", ")}</p>
      
      <p class="text-sm font-light">
        <span class="font-medium">Languages:</span> ${Object.values(
          country.languages ?? ["N/A"]
        ).join(", ")}
      </p>
    `
  );

  const bordersContainer = document.createElement("div");
  bordersContainer.className = "grid items-center grid-cols-4 gap-2";

  country.borders?.forEach((border) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "px-2 py-1 bg-gray-900 text-medium text-xs shadow-md rounded-md";
    button.textContent = border;
    button.onclick = async () => {
      // const countries = await api.getCountryByCode(border);
      const filteredCountries = countries.filter((country) => country.cca3 === border);
      renderLearnMore(filteredCountries[0]);
    };
    bordersContainer.appendChild(button);
  });

  parentDiv.appendChild(bordersContainer);

  elements.countryList.appendChild(parentDiv);
}
