import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import { fetchCountries } from './js/fetchCountries';
import { createCardCountry, createListCountries, addMarkup } from './js/markup';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box'),
    countryInfo = document.querySelector('.country-info'),
    countryList = document.querySelector('.country-list');

input.addEventListener('input', debounce(handleSearchCountry, DEBOUNCE_DELAY));

function handleSearchCountry(event) {
    const searchValue = event.target.value.trim();
    updateUI();

    if (!searchValue) return;
    
    fetchCountries(searchValue)
        .then(data => {
            if (data.length === 1) {                
                const markup = createCardCountry(data[0]);             
                addMarkup(markup, countryInfo);                
            };

            if (data.length > 1 && data.length <= 10) {
                const markup = createListCountries(data);
                addMarkup(markup, countryList);
            };

            if (data.length > 10) { 
                Notify.info("Too many matches found. Please enter a more specific name.");
            };
        })
    .catch(error => Notify.failure(`${error}`))
}

function updateUI() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
}