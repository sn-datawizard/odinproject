function main() {
    var num = 100;
    
    createGrid(num);
    
    var resetButton = document.getElementById('reset-grid');
    resetButton.addEventListener('click', function() {resetGrid(num)});
   
    
}

function resetGrid(n) {
    for (let i = 0; i < n; i++) {
    var singleRow = document.getElementsByClassName('rowGrid')[i];
    singleRow.style.backgroundColor = '#ffffff';
    }
    
    console.log('test');
}


function createGrid(n) {
    grid_size = n
    var parent = document.getElementsByClassName('content-container')[0];

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
    
    var rowUnique = document.getElementById(id);
    rowUnique.style.backgroundColor = '#000000';
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



