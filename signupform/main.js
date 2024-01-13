var UserInputArray = [];

function main() {
    addEvent();
}

function addEvent() {
    var createAccountButton = document.getElementById('btn-create-account');
    createAccountButton.addEventListener('click', function() {getUserInput()});
}

function getUserInput() {
    var inputField = document.getElementsByClassName('form-control');
    
    for (let i = 0; i < inputField.length; i++) {
        var inputValue = inputField[i].value;
        UserInputArray.push(inputValue);
      }
    console.log(UserInputArray);
    
}


main()
