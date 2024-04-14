import { apiKey } from '../../utils/apikey.js'

async function main() {
    const api = await apiKey;
    const submitButton = document.getElementById('button-submit');
    submitButton.addEventListener('click', async function() {displayMeasures(api);});
    submitButton.addEventListener('click', async function() {deleteIcon();});
    //displayMeasures(api);
}

async function displayMeasures(api) {
        const fetch = await fetchAPI(api);

        displayLocation(fetch);
        displayTempC(fetch);
        displayTempF(fetch);
        displayCondition(fetch);
}

async function fetchAPI(key) {
    const city = await getInput();
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=' + key + '&q=' + city, {mode: 'cors'})
    //const response = await fetch('http://api.weatherapi.com/v1/current.json?key=' + key + '&q=London', {mode: 'cors'})
    const data = await response.json();
    return data;
}

async function getInput() {
    const formInput = document.getElementById('input-city');
    return formInput.value;
}

function displayLocation(i) {
    const contentCity = document.getElementsByClassName('content-city')[0];
    contentCity.textContent = 'Location: ' + i.location.name;  
}

function displayTempC(i) {
    const contentCelcius = document.getElementsByClassName('content-celcius')[0];
    contentCelcius.textContent = 'Temperature °C: ' + i.current.temp_c + '°C';
}

function displayTempF(i) {
    const contentFarenheit = document.getElementsByClassName('content-farenheit')[0];
    contentFarenheit.textContent = 'Temperature °F: ' + i.current.temp_f + '°F';
}

function displayCondition(i) {
    //const content = document.getElementsByClassName('content-condition')[0];
    //content.textContent = 'Condition: ' + i.current.condition.text;

    changeIcon(i.current.condition.text);
}

function changeIcon(text) {
    const conditionText = text;

    const iconMap = {
        'Sunny': '/public/images/indicator-sunny.png',
        'Partly cloudy': '/public/images/indicator-partlycloudy.png',
        'Mist': '/public/images/indicator-mist.png',
        'Rainy': '/public/images/indicator-other.png',
        'Clear': '/public/images/indicator-other.png',
        'Overcast': '/public/images/indicator-other.png',
        'Other': '/public/images/indicator-other.png'
    };

    if (conditionText in iconMap) {
        const iconClass = iconMap[conditionText];
        
        const imageContainer = document.getElementsByClassName('header-indicator')[0];
        const image = iconMap[conditionText];
        const imgElement = document.createElement('img');
        imgElement.src = image; 
        imageContainer.appendChild(imgElement);
        
    } else {   
        const imageContainer = document.getElementsByClassName('header-indicator')[0];
        const image = iconMap['Other'];
        const imgElement = document.createElement('img');
        imgElement.src = image; 
        imageContainer.appendChild(imgElement);
    }
}

function deleteIcon() {
    const currentImage = document.getElementsByTagName('img')[0];
    currentImage.remove();
}


main();