import * as helper from '/src/utils/helper.js';

function main() {
    addEventListenerButton();
}

function addEventListenerButton() {
    var loginButton = document.getElementById('login');
    var signupButton = document.getElementById('signup');

    // loginButton.addEventListener('click', function() {redirectLogin()});
    // signupButton.addEventListener('click', function() {redirectSignup()});

    loginButton.addEventListener('click', function() {helper.redirectPage('/login')});
    signupButton.addEventListener('click', function() {helper.redirectPage('/signup')});

}



main();