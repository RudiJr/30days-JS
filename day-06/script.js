const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const cities = [];

fetch(endpoint)
    .then(content => content.json())
    .then(data => cities.push(...data));
    /* The `(...data)` syntax is called the spread operator in JavaScript. It
    is used to spread the elements of an iterable (such as an array) into
    individual elements. In this case, it is used to spread the elements of
    the `data` array into individual elements and push them into the
    `cities` array. */

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        // TODO: need to figure out if the state match what was searched
        const regex = new RegExp(wordToMatch, 'gi'); // gi = global and catch lowercase/uppercase words
        return place.city.match(regex) || place.state.match(regex);
    });
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `<li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                </li>`
    }).join(''); // transform the map() array into a one big string
    suggestions.innerHTML = html;
};

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);