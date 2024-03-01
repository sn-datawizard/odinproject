


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
    }

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

function checkResult() {
    
}



main();