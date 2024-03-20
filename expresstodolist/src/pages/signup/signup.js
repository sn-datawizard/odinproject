import * as helper from '/src/utils/helper.js';

function main() {
    console.log('singup');

    var button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', function() {submit()});

}

function submit() {
    fetch('/signup', {
        method: 'POST'
    });
}


main();