function add_element(){
    var newElement = document.createElement('li');
var listItem = document.getElementById("inputField");
var value = listItem.value;

var textNode = document.createTextNode(value);

newElement.appendChild(textNode);
document.getElementById("todoList").appendChild(newElement);
listItem.value = '';
}