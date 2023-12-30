var userInputArray = [];
var indexOperatorArray = [];

var valArray = [];
var opArray = [];

function main() {
    processInput();
}

function processInput() {
    addEvent();
    //console.log(userInputArray);
    //console.log(indexOperatorArray);

    var resultButton = document.getElementsByClassName('result')[0];
    resultButton.addEventListener('click', function() {defineArrays()});
}

function defineArrays() {
    var operatorArray = ['+', '-', '*', '/', 'x'];
    
    for(let i = 0; i < userInputArray.length; i++) {
        var currentElement = userInputArray[i];
        if (operatorArray.includes(currentElement)) {
            indexOperatorArray.push(i);
            opArray.push(currentElement);
        } else {
            valArray.push(currentElement);
        }
    }
    console.log(opArray);
    console.log(valArray);
}

function addEvent() {
    var digitButtons = document.getElementsByClassName('digit');
    
    for(let i = 0; i < digitButtons.length; i++) {
        digitButtons[i].addEventListener('click', function() {collectUserInput.call(this)});
    }

    var digitButtons = document.getElementsByClassName('operator');
    
    for(let i = 0; i < digitButtons.length; i++) {
        digitButtons[i].addEventListener('click', function() {collectUserInput.call(this)});
    }
}

function collectUserInput() {
    var clicked = this.textContent;
    userInputArray.push(clicked);
}

function operate(values, operator) {
    var operation = values.reduce(function (accumulator, currentValue) {
        switch (operator) {
            case '+':
                return accumulator + currentValue;
            case '-':
                return accumulator - currentValue;
            case '*':
                return accumulator * currentValue;
            case '/':
                if (currentValue === 0) {
                    throw new Error('Cannot divide by zero.');
                }
                return accumulator / currentValue;
        }
    });
    return operation
}

main();


/////////////////////////
// Functions Archive ///
///////////////////////

// function showResult() {
//     var operatorArray = ['+', '-', '*', '/'];
    
//     for(let i = 0; i < userInputArray.length; i++) {
//         var currentElement = userInputArray[i]

//         for(let i = 0; i < operatorArray.length; i++) {
//             if (currentElement.includes(operatorArray[i]) === true) {
//                 var op = currentElement;
                
//                 var index = userInputArray.indexOf(currentElement);
                
//                 var currentNumber = userInputArray.slice(0, index);
//                 console.log(currentNumber.join(''));
//                 console.log(op);
//                 // ToDo Implement logic to get values array and operator array for operate() function
//             }
//         }
//     }
// }

// function defineArrays() {
//     // ToDo Select numbers based on indexOperatorArray for operate() function
//     // Need dynamic creation of arrays based on lenght operator array
//     console.log(userInputArray.slice(0, indexOperatorArray[0]).join(''));
//     console.log(userInputArray.slice(indexOperatorArray[0]+1, indexOperatorArray[1]).join(''));
//     console.log(userInputArray.slice(indexOperatorArray[1]+1, indexOperatorArray[2]).join(''));
//     console.log(userInputArray.slice(indexOperatorArray[2]+1, userInputArray.length.max).join(''));
// }

// function getIndexOperator() {
//     var operatorArray = ['+', '-', '*', '/', 'x'];
    
//     for(let i = 0; i < userInputArray.length; i++) {
//         var currentElement = userInputArray[i];
//         if (operatorArray.includes(currentElement)) {
//             indexOperatorArray.push(i);
//         }
//     }
// }