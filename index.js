var input = document.getElementById("input");
var list = document.getElementById("list");

function add() {
    if (input.value == "") {
        alert("Please enter a task");
        return;
    }else {
        var task = input.value;
        list.innerHTML += `<li onclick="remove(this)">${task} <button>Delete</button></li>`;
        input.value = "";

    }
}

function remove(element) {
    element.style.display = "none";
}