var input = document.getElementById("input");
var list = document.getElementById("list");
var thirddiv = document.getElementsByClassName("thirddiv");

function add() {
    if (thirddiv.length < 5) {

        if (input.value == "") {
            alert("Please enter a task");
            return;
        }else {
            var task = input.value;
            list.innerHTML += `<div class="thirddiv" onclick="remove(this)"><h3>${task}</h3> <button><img src="/assets/bin.png"></button></div>`;
            input.value = "";
    
        }
    }else {
        alert("You have reached the maximum number of tasks");
    }

}

function remove(element) {
    element.style.display = "none";
}