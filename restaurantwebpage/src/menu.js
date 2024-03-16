import * as helper from './helper.js'

export function addEventMenuPage() {
    var menuButton = document.getElementById('menu-button');
    var eventListeners = [
        initializeMenu,
        createMenuHeader,
        createMenuTitle,
    ]

    eventListeners.forEach(func => {
        menuButton.addEventListener('click', func)
    })
}

export function initializeMenu() {
    console.log('menu page!');
    let content = document.getElementById('content');
    content.textContent = '';

}

function createMenuHeader() {
    var idContainer = 'menu-header-container';
    var element = 'h1';
    var elementClass = 'menu-header';
    var text = 'Menu'

    helper.createContentBlock(idContainer, element, elementClass, text);
}

function createMenuTitle() {
    var idContainer = 'menu-header-title';
    var element = 'h2';
    var elementClass = 'menu-title';
    var text = 'Food'

    helper.createContentBlock(idContainer, element, elementClass, text);
}

