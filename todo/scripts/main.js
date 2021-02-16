let tasks = [];

window.onload = function () {
  if (JSON.parse(localStorage.getItem("tasks")) != null)
    tasks = JSON.parse(localStorage.getItem("tasks"));
  display();
};

function addTask() {
  if (!isEmpty(document.querySelector(".add-text").value)) {
    tasks.push(document.querySelector(".add-text").value);
    if (localStorage.getItem("tasks") == null) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    display();
    document.querySelector(".add-text").value = "";
  }
}

function isEmpty(str) {
  return (!str || str.length === 0);
}

function display() {
  document.querySelector(".list").innerHTML = "";
  for (let i = 0; i < tasks.length; i++)
    document.querySelector(".list").innerHTML +=
    "<div class='task active'>" +
    tasks[i] +
    "<img class='checkmark' src='images/checkmark.png' onclick='strike(" + i + ")'><img class='archive' src='images/archive.png' onclick='archive(" + i + ")'></div><br>";
}

function archive(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  display();
}

function strike(index) {
  if (tasks[index].includes("<strike>")) {
    tasks[index] = tasks[index].replace("<strike>", "");
    tasks[index].classList.remove('struck');
  } else {
    tasks[index] = "<strike>" + tasks[index] + "</strike>";
    tasks[index].classList.add('struck');
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  display();
}

function hideCompleted() {
  document.querySelectorAll('.struck').style.display = "none";
  document.querySelectorAll('.active').style.display = "inline-block";
}

function hideActive() {
  document.querySelectorAll('.active').style.display = "none";
  document.querySelectorAll('.struck').style.display = "inline-block";
}

function showAll() {
  document.querySelectorAll('.active').style.display = "inline-block";
  document.querySelectorAll('.struck').style.display = "inline-block";
}