function main() {
    //var num = validateGridSize();
    //var num = 900;

    var num = chooseGridSize();
    createGrid(num);
    
    var resetButton = document.getElementById('reset-grid');
    resetButton.addEventListener('click', function() {resetGrid(num)});
   
    
}


function chooseGridSize() {
    return 900
}


function resetGrid(n) {
    for (let i = 0; i < n; i++) {
    var singleRow = document.getElementsByClassName('rowGrid')[i];
    singleRow.style.backgroundColor = '#ffffff';
    }
}


function createGrid(n) {
    grid_size = n;

    var parent = document.getElementsByClassName('content-container')[0];
    
    var r = Math.sqrt(n);
    parent.style.gridTemplateColumns = `repeat(${r}, 1fr)`;
    parent.style.gridTemplateRows = `repeat(${r}, 1fr)`;

    for (let i = 0; i < n; i++) {
        var grid = document.createElement('div');
        grid.setAttribute('class', 'rowGrid');
        
        var randomID = genRandonString(5);
        grid.setAttribute('id', randomID);
        parent.appendChild(grid);
        
        var rowID = grid.getAttribute('id');

        (function(id) {
            grid.addEventListener('mouseenter', function() {
                changeGridColor(id);
            });
        })(rowID);
      }
}


function changeGridColor(id) {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    var rowUnique = document.getElementById(id);
    rowUnique.style.backgroundColor = randomColor;
    
    //rowUnique.style.backgroundColor = '#000000';
}


function genRandonString(length) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < length; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}

main();


////////////////////////
// Functions Archive //
//////////////////////


// function validateGridSize() {
//     var validSizes = [100, 400, 900, 1600, 2500];
    
//     var numPrompt = parseInt(prompt('Choose grid size: 100, 400, 900, 1600, or 2500'));

//     while (!validSizes.includes(numPrompt)) {
//         numPrompt = parseInt(prompt('Invalid size! Choose grid size: 100, 400, 900, 1600, or 2500'));
//     }
//     return numPrompt
// }


