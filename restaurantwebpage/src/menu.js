
export function addEventSwitchPage() {
    var menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', function() {initializeMenu()});
}

export function initializeMenu() {
    console.log('menu page!');
    let content = document.getElementById('content');
    content.textContent = '';

}

