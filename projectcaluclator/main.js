var inputArray = [];
var inputArrayOperator = [];

function main() {
    
}

function getInputDigit(i) {
    var input = i;
    inputArray.push(input);
    if (inputArray.length > 1) {
        inputArray = inputArray.join('');
        inputArray = [inputArray];
    }
    console.log(inputArray);
}

function getInputOperator(i) {
    var input = i;
    inputArrayOperator.push(input);
    console.log(inputArrayOperator);
}

function operate(value1, value2, operator) {
    var op = operator;
    var result;
    if (op == '+') {
        result = add(value1, value2);
    } else if (op == '-') {
        result = subtract(value1, value2);
    } else if (op == '*') {
        result = multiply(value1, value2);
    } else {
        result = divide(value1, value2);
    }
    return result
}

function add(val1, val2) {
    var operation = val1 + val2;
    return operation
}

function subtract(val1, val2) {
    var operation = val1 - val2;
    return operation
}

function multiply(val1, val2) {
    var operation = val1 * val2;
    return operation
}

function divide(val1, val2) {
    var operation = val1 / val2;
    return operation
}

main();