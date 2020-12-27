import countryTemplate from './templates/country-template.hbs';
import countriesTemplate from './templates/countries-template.hbs';
import API from './js/api-service';
import getRefs from './js/get-refs';
// import debounce from 'lodash.debounce';

const refs = getRefs();

refs.searchInput.addEventListener('input', onSearch);

function onSearch(e) {
  e.preventDefault();

  const input = e.currentTarget;
  const searchQuery = input.value;

  API.fetchCountry(searchQuery)
    .then(onFetchSuccess)
    .catch(onFetchError)
    .finally(clearMarkup())
}

function onFetchSuccess(data) {
  if (data.length === 1) {
    renderCountryTemplate(data);
    return;
  }

  if (data.length > 1 && data.length <= 10) {
    renderCountriesTemplate(data);
    return;
  }
  
  onFetchError();   
  clearMarkup();
  return;
}

function renderCountryTemplate(country) {
    const markup = countryTemplate(country);
    refs.countryContainer.innerHTML = markup;
}

function renderCountriesTemplate(countries) {
    const markup = countriesTemplate(countries);
    refs.countryContainer.innerHTML = markup;
}

function onFetchError() {
console.log("Too many countries found!");
}

function clearMarkup() {refs.countryContainer.innerHTML = '';}