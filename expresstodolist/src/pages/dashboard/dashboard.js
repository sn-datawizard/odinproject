

function main() {
    var button = document.getElementById('add-button');
    button.addEventListener('click', function() {addRow()});
}

function addRow() {
    var content = document.getElementsByClassName('content')[0];
    var row = content.appendChild(document.createElement('div'));
    row.setAttribute('class', 'row');

    addTask(row);
}

function addTask(row) {
    var task = row.appendChild(document.createElement('div'));
    task.setAttribute('class', Math.random() * 10);

    var button = task.appendChild(document.createElement('button'));
    button.textContent = 'DELETE';

    button.addEventListener('click', function() {deleteTask(button)})

}

function deleteTask(button) {
    var parent = button.parentElement
    parent.remove();
}


main();