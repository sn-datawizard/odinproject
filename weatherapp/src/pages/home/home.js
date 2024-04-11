

async function main() {
    const fetch = await fetchData();

    displayLocation(fetch);
    displayTemp(fetch);
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
    //contentCity.textContent = JSON.stringify(i.location.name);
    contentCity.textContent = 'Location: ' + i.location.name;  
}

function displayTemp(i) {
    const contentCelcius = document.getElementsByClassName('content-celcius')[0];
    contentCelcius.textContent = 'Temperature: ' + i.current.temp_c + '°C';
    //contentCelcius.textContent = JSON.stringify(i.current.temp_c);
}

function displayCondition(i) {
    const content = document.getElementsByClassName('content-condition')[0];
    content.textContent = 'Condition: ' + i.current.condition.text;
    //content.textContent = JSON.stringify(i.current.condition.text);
}



main();