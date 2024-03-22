import * as helper from '/src/utils/helper.js';

function main() {

    var button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', function() {login()});

}

function login() {
    var data = getInput();

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }).then(res => {
        if (res.ok) {
            helper.redirectPage('/dashboard');
        } else {
            helper.redirectPage('/login');
        }
    })    
    .catch(err => {
        console.error('Error:', err);
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