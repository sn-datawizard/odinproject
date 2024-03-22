

function main() {
    var button = document.getElementById('add-button');
    button.addEventListener('click', function() {addRow()});
}

function addRow() {
    var content = document.getElementsByClassName('content')[0];
    var row = content.appendChild(document.createElement('div'));
    row.setAttribute('class', 'row');
}





main();