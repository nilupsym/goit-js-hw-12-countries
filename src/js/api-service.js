const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountry(searchQuery) {
    return fetch(`${BASE_URL}/name/${searchQuery}`)
        .then(responce => responce.json(),);
}

export default { fetchCountry };