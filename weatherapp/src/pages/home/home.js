import apiKey from '../../utils/apikey.js';

function main() {
    displayTemp();
}

async function displayTemp() {
    const data = await fetchData(apiKey);
    
    const content = document.getElementsByClassName('content-condition')[0];
    content.textContent = JSON.stringify(data['current']['condition']['text']);

    const contentCity = document.getElementsByClassName('content-city')[0];
    contentCity.textContent = JSON.stringify(data['location']['name']);

    const contentCelcius = document.getElementsByClassName('content-celcius')[0];
    contentCelcius.textContent = JSON.stringify(data['current']['temp_c']);
}

async function fetchData(key) {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=' + key + '&q=London');

    return await response.json();
}



main();