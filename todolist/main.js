function addItem() {
    var inputValue = document.getElementById('item').value;

    var liItem = document.createElement('li');
    liItem.append(inputValue);

    var ulContainer = document.querySelector('.item-container');
    ulContainer.appendChild(liItem); 
    randomIdList = genRandonString(5);
    liItem.setAttribute('id', randomIdList); 

    document.getElementById('item').value = "";
    document.getElementById('item').focus();

    var liButtonDelete = document.createElement('button');
    liButtonDelete.textContent = 'Delete';

    liItem.appendChild(liButtonDelete);
    randomIdButtonDelete = genRandonString(5);
    liButtonDelete.setAttribute('id', randomIdButtonDelete); 
    
    liButtonDelete.addEventListener('click', function() {removeItem(liItem.getAttribute('id'))});

}

function removeItem(id) {
    liItemToDelete = document.getElementById(id);
    liItemToDelete.remove();

}

function genRandonString(length) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < length; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}
  

var itemButtonAdd = document.querySelector('.item-button');
itemButtonAdd.addEventListener('click', addItem);