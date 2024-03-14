import * as menu from './menu.js';
import './style.css';

function main() {
    initialize();
    createContent();
    
    menu.addEventSwitchPage();
}

function initialize() {
    let body = document.body;
    
    let div = body.appendChild(document.createElement('div'));
    div.setAttribute('class', 'nav-container');
    
    let nav = div.appendChild(document.createElement('nav'));
    nav.setAttribute('class', 'navbar');

    initializeButtons('Home', 'home-button');
    initializeButtons('Menu', 'menu-button');

    body.appendChild(document.createElement('div')).setAttribute('id', 'content');

}

function initializeButtons(text, id) {
    let nav = document.getElementsByClassName('navbar')[0];
    let button = nav.appendChild(document.createElement('button'));

    button.setAttribute('id', id)
    button.textContent = text;
}

function createContent() {
    createHeader();
    createWelcomeText();
    createOpeningHours();
    createLocationText();
}

function createHeader() {
    var idContainer = 'header-container';
    var element = 'h1';
    var elementClass = 'header';
    var text = 'XYZ Korean Chicken'

    createContentBlock(idContainer, element, elementClass, text);
}

function createWelcomeText() {
    var idContainer = 'welcome-container';
    var element = 'p';
    var elementClass = 'welcome-text';
    var text = 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus a est faucibus sollicitudin. Vivamus non tellus eget arcu. ipsum. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus a est faucibus sollicitudin. Vivamus non tellus eget arcu. ipsum. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus a est faucibus sollicitudin. Vivamus non tellus eget arcu. ipsum. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus a est faucibus sollicitudin. Vivamus non tellus eget arcu. ipsum.'

    createContentBlock(idContainer, element, elementClass, text);
}

function createOpeningHours() {
    var idContainer = 'opening-container';
    var element = 'p';
    var elementClass = 'opening-text';
    
    createContentBlock(idContainer, element, elementClass, null);


    const openingContainer = document.getElementById('opening-container');
    openingContainer.replaceChildren();
    
    
    var schedule = [
        'Monday: 2pm - 10pm',
        'Tuesday: 2pm - 10pm',
        'Wednesday: 2pm - 10pm',
        'Thursday: 2pm - 10pm',
        'Friday: 2pm - 10pm',
        'Saturday: 11am - 7pm',
        'Sunday: 11am - 7pm'
    ];

    for (var i = 0; i < schedule.length; i++) {
        let hourDiv = openingContainer.appendChild(document.createElement('div'));
        hourDiv.setAttribute('class', 'opening-hours');
        hourDiv.textContent = schedule[i];
    }

}

function createLocationText() {
    var idContainer = 'location-container';
    var element = 'p';
    var elementClass = 'location-text';
    var text = '123 Forest Drive, Forestville, TX'

    createContentBlock(idContainer, element, elementClass, text);
}



// ///////////////////////
// // Helper Functions //
// /////////////////////

function createContentBlock(id, element, className, textContent) {
    const content = document.getElementById('content');
    const container = content.appendChild(document.createElement('div'));
    container.setAttribute('id', id);
    container.setAttribute('class', 'container')

    const header = container.appendChild(document.createElement(element));
    header.setAttribute('class', className);
    header.textContent = textContent;
}






main();
