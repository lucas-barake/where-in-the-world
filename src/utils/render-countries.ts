import { type Country } from "../types/countries";
import { elements } from "./elements";
import { renderLearnMore } from "./render-learn-more";

export function renderCountries(countries: Country[]): void {
  elements.countryList.innerHTML = "";

  countries.forEach((country) => {
    const parentDiv = document.createElement("div");
    parentDiv.className = "flex flex-col bg-neutral-900 w-72 shadow-lg rounded-lg";

    parentDiv.insertAdjacentHTML(
      "beforeend",
      `
    <img
        class="rounded-t-lg"
        src="${country.flags.svg}"
      />

      <div class="flex flex-col pl-6 py-4 gap-1">
        <h1 class="text-sm font-medium">${country.name.common}</h1>
        <p class="font-light text-xs">
          <span class="font-medium">Population:</span> ${country.population}
        </p>
        <p class="font-light text-xs"><span class="font-medium">Region:</span> ${country.region}</p>
        <p class="font-light text-xs"><span class="font-medium">Capital:</span> ${
          country.capital?.at(0) ?? "N/A"
        }</p>
      </div>
    `
    );

    const learnMoreButton = document.createElement("button");
    learnMoreButton.onclick = () => {
      renderLearnMore(country);
    };
    learnMoreButton.className = "text-xs font-medium self-end px-6 py-4 hover:animate-pulse";
    learnMoreButton.type = "button";
    learnMoreButton.textContent = "Learn more →";

    parentDiv.appendChild(learnMoreButton);

    elements.countryList.appendChild(parentDiv);
  });
}
