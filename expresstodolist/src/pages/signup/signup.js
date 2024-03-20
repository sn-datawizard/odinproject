import * as helper from '/src/utils/helper.js';

function main() {
    console.log('singup');

    var button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', function() {submit()});

}

function submit() {
    var data = getInput();

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
}

function getInput() {
    var emailInput = document.getElementById('email').value;
    var passwordInput = document.getElementById('password').value;

    var formData = {
        user: emailInput,
        password: passwordInput
    };
    var jsonData = JSON.stringify(formData);

    return jsonData

}


main();