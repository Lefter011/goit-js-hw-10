function createCardCountry(country) {
    const { name, capital, population, flags, languages } = country;
    return `
        <div class = "country-card">
            <div class = "country-wrapper">
                <div class = "country-flag-wrapper">
                    <img class = "country-flag" src = "${flags.svg}" alt = "${name.official}">
                </div>
                <p class = "country-name"> ${name.common} </p>
            </div>
            <p class="country-text">Capital:<span class="country-fetch">${capital}</span></p>
            <p class="country-text">Population:<span class="country-fetch">${population}</span></p>
            <p class="country-text">Languages:<span class="country-fetch">${Object.values(languages).join(', ')}</span></p>
        </div>`
}

function createListCountries(countries) {
    return countries.reduce((acc, { flags, name }) => acc + 
        `<li class="country-list__item">
            <div class="country-list__image">
                <img  src="${flags.svg}" alt="flag ${name.official}">
            </div>
            <p class="country-list__name">${name.common}</p>
        </li>`, '');
    
}

function addMarkup(markup, element) { 
    element.insertAdjacentHTML('beforeend', markup);    
}

export { createCardCountry, createListCountries, addMarkup }