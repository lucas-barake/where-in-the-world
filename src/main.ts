// import { api } from "./api";
import { countries, initializeLocalStorage } from "./storage/countries";
import "./styles.css";
import { elements } from "./utils/elements";
import { renderCountries } from "./utils/render-countries";
// import { setFetchState } from "./utils/set-fetch-state";

void initializeLocalStorage();

elements.form.onsubmit = async (e) => {
  e.preventDefault();

  const input = elements.searchInput.value.trim().toLowerCase();
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(input)
  );
  renderCountries(filteredCountries);

  /*  xmlGetCountries(input)
    .then((countries) => {
      setFetchState({
        state: "success",
      });
      renderCountries(countries);
    })
    .catch((error: FetchError) => {
      setFetchState({
        state: "error",
        error,
      });
    }); */

  /* setFetchState({
    state: "pending",
  });
  try {
    const countries = await api.getCountriesByName(input);
    renderCountries(countries);
    localStorage.setItem("countries", JSON.stringify(countries));
    setFetchState({
      state: "success",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      setFetchState({
        state: "error",
        error: error,
      });
    } else {
      setFetchState({
        state: "error",
        error: new Error("Something went wrong"),
      });
    }
  } */
};
