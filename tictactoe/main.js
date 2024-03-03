


function main() {
    detectMove();

}

function detectMove() {
    const boxes = document.getElementsByClassName('box');

    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        box.addEventListener('click', function() {makePlayerMove(box.getAttribute('id'))});
      }
}

function makePlayerMove(id) {
    const boxPlay = document.getElementById(id);
    
    if (boxPlay.textContent.trim() !== '') {
        alert('Choose another tile!');
    } else {
        boxPlay.textContent = 'X';
        makeComputerMove();
        checkVictory();
    }

    // makeComputerMove();
    // checkVictory();

}

function makeComputerMove() {
    const boxes = document.getElementsByClassName('box');

    const emptyBoxes = Array.from(boxes).filter(box => !box.textContent.trim());
    
    if (emptyBoxes.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
        const randomBox = emptyBoxes[randomIndex];

        setTimeout(() => {
            randomBox.textContent = 'O';
        }, 500);
    }
}

function checkVictory() {
    const boxes = document.getElementsByClassName('box');
    const board = Array.from(boxes).map(box => box.textContent.trim());

    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (const combination of winCombinations) {
        const [a, b, c] = combination;

        if (board[a] === 'X' && board[b] === 'X' && board[c] === 'X') {
            alert('PLAYER wins!');
            resetGame();
            return;
        } else if (board[a] === 'O' && board[b] === 'O' && board[c] === 'O') {
            alert('COMPUTER wins!');
            resetGame();
            return;
        }
    }

    if (!board.includes('')) {
        alert('It\'s a tie!');
        resetGame();
    }
}

function resetGame() {
    window.location.reload(true);
}



main();