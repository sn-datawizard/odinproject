// ///////////////////////
// // Helper Functions //
// /////////////////////

export function createContentBlock(id, element, className, textContent) {
    const content = document.getElementById('content');
    const container = content.appendChild(document.createElement('div'));
    container.setAttribute('id', id);
    container.setAttribute('class', 'container')

    const header = container.appendChild(document.createElement(element));
    header.setAttribute('class', className);
    header.textContent = textContent;
}

