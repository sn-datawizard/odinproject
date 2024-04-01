

function main() {
    var button = document.getElementById('add-button');
    button.addEventListener('click', function() {addRow()});
}

function addRow() {
    var content = document.getElementsByClassName('content')[0];
    var row = content.appendChild(document.createElement('div'));
    row.setAttribute('class', 'row-container');

    var txt = prompt('Task name');

    addTask(row, txt);
}

function addTask(row, txt) {
    var divText = row.appendChild(document.createElement('div'));
    var text = divText.appendChild(document.createElement('h3'));
    text.setAttribute('class', 'text-container')
    text.textContent = txt;

    var divButton = row.appendChild(document.createElement('div'));
    var button = divButton.appendChild(document.createElement('button'));
    button.setAttribute('class', 'button-container')
    button.textContent = 'DELETE';
    button.addEventListener('click', function() {deleteTask(button)});

}

function deleteTask(button) {
    var parent = button.parentNode.parentNode;
    parent.remove();
}


main();