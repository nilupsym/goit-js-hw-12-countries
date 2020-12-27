import './styles.css';
import countryTemplate from '../templates/country-card.hbs';
import API from './api-service';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchInput.addEventListener('input', onSearch);

function onSearch(e) {
    e.preventDefault();
    const input = e.currentTarget;
    const searchQuery = input.elements.query.value;
    console.log(searchQuery);
    API.fetchCountry(searchQuery)
        .then(renderCountryTemplate)
        .catch(onFetchError)
        .finally(() => input.reset())
}

function renderCountryTemplate(country) {
    const markup = countryTemplate(country);
    refs.countryContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert("Oops, we can't find your country!");
}