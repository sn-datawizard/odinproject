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
    console.log(myLibrary);
    displayBook();
    reset(authorInput, titleInput, releaseYearInput);
}

function displayBook(){
    if (myLibrary[0].author != '') {
        var rowsContainer = document.getElementsByClassName('rows')[0];
        var row = rowsContainer.appendChild(document.createElement('tr'));
    
        var authorCell = row.appendChild(document.createElement('td'));
        authorCell.textContent = myLibrary[0].author;
    
        var titleCell = row.appendChild(document.createElement('td'));
        titleCell.textContent = myLibrary[0].title;
    
        var releaseYearCell = row.appendChild(document.createElement('td'));
        releaseYearCell.textContent = myLibrary[0].releaseYear;
    }
}

function reset(author, title, releaseYear) {
    myLibrary.splice(-1);
    
    author.value = '';
    title.value = '';
    releaseYear.value = '';
}

main();