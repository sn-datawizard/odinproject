

function main() {
    addEventListenerButton();
}

function addEventListenerButton() {
    var loginButton = document.getElementById('login');
    var signupButton = document.getElementById('signup');

    loginButton.addEventListener('click', function() {redirectLogin()});
    signupButton.addEventListener('click', function() {redirectSignup()});

}

function redirectLogin() {
    window.location.href = '/login'
}

function redirectSignup() {
    window.location.href = '/signup'
}


main();