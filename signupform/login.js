function main() {
    addEvent();
}

function addEvent() {
    var createAccountButton = document.getElementById('btn-login-account');
    createAccountButton.addEventListener('click', function() {loginUser()});
}

function loginUser() {
    console.log('Login successful')
}

main()

