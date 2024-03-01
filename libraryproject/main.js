const myLibrary = [
    // { author: 'John Doe', title: 'The Great Adventure', releaseYear: 2022 },
    // { author: 'Jane Smith', title: 'Mysteries Unveiled', releaseYear: 2019 },
    // { author: 'Bob Johnson', title: 'Coding Chronicles', releaseYear: 2020 }
];

function main(){
    var buttonAdd = document.getElementsByClassName('button-add')[0];
    buttonAdd.addEventListener('click', function() {(addBook())});
}

function addBook() {
    var authorInput = document.getElementById('author');
    var titleInput = document.getElementById('title');
    var releaseYearInput = document.getElementById('year');
    
    myLibrary.push({author: authorInput.value, title: titleInput.value, releaseYear: releaseYearInput.value});
    displayBook();
    reset(authorInput, titleInput, releaseYearInput);
}

function displayBook(){
    if (myLibrary[0].author != '') {
        var rowsContainer = document.getElementsByClassName('rows')[0];
        
        randomId = genRandom(10);
        var row = rowsContainer.appendChild(document.createElement('tr'));
        row.setAttribute('id', randomId);
    
        var authorCell = row.appendChild(document.createElement('td'));
        authorCell.textContent = myLibrary[0].author;
    
        var titleCell = row.appendChild(document.createElement('td'));
        titleCell.textContent = myLibrary[0].title;
    
        var releaseYearCell = row.appendChild(document.createElement('td'));
        releaseYearCell.textContent = myLibrary[0].releaseYear;

        var deleteButtonCell = row.appendChild(document.createElement('td')).appendChild(document.createElement('button'));
        deleteButtonCell.className = 'delete-button';
        deleteButtonCell.textContent = 'Delete';

        deleteButtonCell.addEventListener('click', function() {deleteRow(row.getAttribute('id'))});
        console.log(row.getAttribute('id'));
    }
}

function reset(author, title, releaseYear) {
    myLibrary.splice(-1);
    
    author.value = '';
    title.value = '';
    releaseYear.value = '';
}

function deleteRow(id) {
    rowToDelete = document.getElementById(id);
    console.log(id);
    rowToDelete.remove();
}

function genRandom(length) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < length; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}

main();