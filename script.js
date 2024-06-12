function add_element() {
    var newElement = document.createElement('li');
    var listItem = document.getElementById("inputField");
    newElement.innerHTML = listItem.value;

    newElement.style.position = "relative";
    
    
    document.getElementById("todoList").appendChild(newElement);

    var Span = document.createElement("span");
    Span.innerHTML = "\u00d7";
    newElement.appendChild(Span);

    
    Span.style.cursor = "pointer"; // Make cursor a pointer to indicate it's clickable
    Span.onclick = function() {
        newElement.remove();
    };



    listItem.value = '';
}
