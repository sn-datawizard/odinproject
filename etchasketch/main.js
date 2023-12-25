function main() {
    addElToGridButton();
    
    body = document.getElementsByTagName('body');
    body.click;

}

function addElToGridButton() {
    var gridButtons = document.getElementsByClassName('grid-button');
    
    for (let i = 0; i < gridButtons.length; i++) {
        var btnGrid = gridButtons[i];
        var gridButtonID = gridButtons[i].getAttribute('id');

        (function(id) {
            btnGrid.addEventListener('click', function() {
                chooseGridSize(id);
            });
        })(gridButtonID);
    }
}

function chooseGridSize(gridbtnID) {
    var gridButton = document.getElementById(gridbtnID);
    var gridButtonAttribute = gridButton.getAttribute('id');
    
    var gridSizeArray = [100, 400, 900, 1600, 2500];
    var getGridSize;

    if (gridButtonAttribute == 'set-grid-100') {
        getGridSize = gridSizeArray[0];
    } else if (gridButtonAttribute == 'set-grid-400') {
        getGridSize = gridSizeArray[1];
    } else if (gridButtonAttribute == 'set-grid-900') {
        getGridSize = gridSizeArray[2];
    } else if (gridButtonAttribute == 'set-grid-1600') {
        getGridSize = gridSizeArray[3];
    } else if (gridButtonAttribute == 'set-grid-2500') {
        getGridSize = gridSizeArray[4];
    }
    createGrid(getGridSize);
    var resetButton = document.getElementById('reset-grid');
    resetButton.addEventListener('click', function() {resetGrid(getGridSize)});
}

function createGrid(n) {
    grid_size = n;

    var parent = document.getElementsByClassName('content-container')[0];

    checkGrid();
    document.getElementById('grid-size-text').innerHTML = 'Change grid size!';

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

function checkGrid() {
    var existingDivs = document.getElementsByClassName('rowGrid');
    if (existingDivs.length > 0) {

        for (let i = existingDivs.length - 1; i >= 0; i--) {
            existingDivs[i].remove();
        }
    }
}

function resetGrid(n) {
    var parent = document.getElementsByClassName('content-container')[0];
    for (let i = 0; i < n; i++) {
    var singleRow = document.getElementsByClassName('rowGrid')[i];
    singleRow.style.backgroundColor = '#ffffff';
    //singleRow.remove();
    }
}

function changeGridColor(id) {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    var rowUnique = document.getElementById(id);
    rowUnique.style.backgroundColor = randomColor; 
    //rowUnique.style.backgroundColor = '#000000';
}


// function changeGridColor(id) {
//     var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//     var rowUnique = document.getElementById(id);
//     rowUnique.style.backgroundColor = randomColor; 
//     //rowUnique.style.backgroundColor = '#000000';
// }

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


