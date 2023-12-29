var UserInputArray = [];

function main() {
    addEvent();
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
    UserInputArray.push(clicked);
    console.log(clicked);
    console.log(UserInputArray);
}

function collectInput() {
    var inputDigit = [5, 6];
    var inputOp = '+';
    return {
        'values': inputDigit,
        'operator': inputOp
    };
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