
export function addEventSwitchPage() {
    var menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', function() {initializeMenu()});
}

export function initializeMenu() {
    console.log('redirect');
    let content = document.getElementById('content');
    content.textContent = '';

}

