

async function main() {
    const fetch = await fetchData();

    displayLocation(fetch);
    displayTempC(fetch);
    displayTempF(fetch);
    displayCondition(fetch);
}

async function fetchData() {
    try {
        const response = await fetch('/data');
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

function displayLocation(i) {
    const contentCity = document.getElementsByClassName('content-city')[0];
    contentCity.textContent = 'Location: ' + i.location.name;  
}

function displayTempC(i) {
    const contentCelcius = document.getElementsByClassName('content-celcius')[0];
    contentCelcius.textContent = 'Temperature: ' + i.current.temp_c + '°C';
}

function displayTempF(i) {
    const contentFarenheit = document.getElementsByClassName('content-farenheit')[0];
    contentFarenheit.textContent = 'Temperature: ' + i.current.temp_f + '°F';
}

function displayCondition(i) {
    const content = document.getElementsByClassName('content-condition')[0];
    content.textContent = 'Condition: ' + i.current.condition.text;

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
        'Overcast': '/public/images/indicator-other.png'
    };

    if (conditionText in iconMap) {
        const iconClass = iconMap[conditionText];
        console.log(iconClass);
        
        const imageContainer = document.getElementsByClassName('header-indicator')[0];
        const image = iconMap[conditionText];
        const imgElement = document.createElement('img');
        imgElement.src = image; 
        imageContainer.appendChild(imgElement);
        
    } else {
        console.log('Weather condition not in map');
    }
}



main();