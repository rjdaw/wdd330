let tasks = [];

function addTask () {
    if (isEmpty(document.querySelector(".add-text").value)) {
        tasks.push(document.querySelector(".add-text").value);
        display();
    }
}

function isEmpty(str) {
    return (!str || str.length === 0);
}

function display() {
    document.querySelector(".list").innerHTML = "";

    for (let i = 0; i <  tasks.length; i++) {
        document.querySelector(".list").innerHTML += "<div class='task'>" + tasks[i] + "<img class='checkmark' src='images/checkmark.png' onclick='strike("+i+")'><img class='archive' src='images/delete-icon.jpg' onclick='archive("+i+")'></div>";
    }
}