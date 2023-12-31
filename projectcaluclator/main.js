var userInputArray = [];


function main() {
    processInput();
}

function processInput() {
    addEvent();

    var resultButton = document.getElementsByClassName('result')[0];
    resultButton.addEventListener('click', function() {calculateResult(userInputArray)});
}

function addEvent() {
    var digitButtons = document.getElementsByClassName('digit');
    
    for(let i = 0; i < digitButtons.length; i++) {
        digitButtons[i].addEventListener('click', function() {collectUserInput.call(this)});
    }

    var operateButtons = document.getElementsByClassName('operator');
    
    for(let i = 0; i < operateButtons.length; i++) {
        operateButtons[i].addEventListener('click', function() {collectUserInput.call(this)});
    }

    var allClearButton = document.getElementsByClassName('clear')[0];
    allClearButton.addEventListener('click', function() {deleteUserInput()});
}

function collectUserInput() {
    var clicked = this.textContent;
    userInputArray.push(clicked);
    document.getElementsByClassName('display-result')[0].textContent = userInputArray.join('');
}

function deleteUserInput() {
    userInputArray = [];
    document.getElementsByClassName('display-result')[0].textContent = 0;
}

function calculateResult(expressionArray) {
    var expressionString = expressionArray.join('');
    console.log(expressionString);

    try {
        var result = eval(expressionString);
        document.getElementsByClassName('display-result')[0].textContent = result;
        console.log(result);

    } catch (error) {
        console.error('Error in calculation:', error);
        console.log('Error');
        return 'Error';
    }
}

main();

/////////////////////////
// Functions Archive ///
///////////////////////

// function getIndexOperator() {
//     var operatorArray = ['+', '-', '*', '/', 'x'];
    
//     for(let i = 0; i < userInputArray.length; i++) {
//         var currentElement = userInputArray[i];
//         if (operatorArray.includes(currentElement)) {
//             indexOperatorArray.push(i);
//         }
//     }
// }

// function defineArrays() {
//     var operatorArray = ['+', '-', '*', '/', '='];
    
//     for(let i = 0; i < userInputArray.length; i++) {
//         var currentElement = userInputArray[i];
//         if (operatorArray.includes(currentElement)) {
//             //indexOperatorArray.push(i);
//             opArray.push(currentElement);
//             valArray.push(parseInt(tempValArray.join('')));
//             tempValArray = []; // 35 + 3 +
            

//             // if (currentElement === '=') {
//             //     opArray.pop()
//             //     console.log(operate(valArray, opArray[0]));
//             //     resultOperate = operate(valArray, opArray[0]);
//             //     document.getElementsByClassName('display-result')[0].textContent = resultOperate;
//             // }
//         } else {
//             tempValArray.push(parseInt(currentElement));
//         }
//     }
//     console.log(opArray);
// }

// function operate(values, operator) {
//     var operation = values.reduce(function (accumulator, currentValue) {
//         switch (operator) {
//             case '+':
//                 return accumulator + currentValue;
//             case '-':
//                 return accumulator - currentValue;
//             case '*':
//                 return accumulator * currentValue;
//             case '/':
//                 if (currentValue === 0) {
//                     throw new Error('Cannot divide by zero.');
//                 }
//                 return accumulator / currentValue;
//         }
//     });
//     return operation
// }