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
    "<div class='task task" + `${i}` + " active'><span class='task" + `${i}` + "'>" +
    tasks[i] +
    "</span><img class='checkmark' src='images/checkmark.png' onclick='strike(" + i + ")'><img class='archive' src='images/archive.png' onclick='archive(" + i + ")'></div><br>";
}

function archive(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  display();
}

function strike(index) {
  if (document.querySelector(`.task${index}`).classList.contains('struck')) {
    document.querySelector(`.task${index}`).classList.remove('struck');
    document.querySelector(`.task${index}`).classList.add('active');
    document.querySelector(`.task${index}`).style.textDecoration = "none";
  } else {
    document.querySelector(`.task${index}`).style.textDecoration = "line-through";
    document.querySelector(`.task${index}`).classList.add('struck');
    document.querySelector(`.task${index}`).classList.remove('active');
  }
}

let allStruck = document.querySelectorAll('.struck');
let allActive = document.querySelectorAll('.active');

function hideCompleted() {
  let allStruck = document.querySelectorAll('.struck');
  let allActive = document.querySelectorAll('.active');
  for (let i = 0; i < allStruck.length; i++) {
    allStruck[i].style.display = 'none';
    allActive[i].style.display = 'block';
  }
}

function hideActive() {
  let allStruck = document.querySelectorAll('.struck');
  let allActive = document.querySelectorAll('.active');
  for (let i = 0; i < allStruck.length; i++) {
    allStruck[i].style.display = 'block';
    allActive[i].style.display = 'none';
  }
}

function showAll() {
  let allStruck = document.querySelectorAll('.struck');
  let allActive = document.querySelectorAll('.active');
  for (let i = 0; i < allStruck.length; i++) {
    allStruck[i].style.display = 'block';
    allActive[i].style.display = 'block';
  }
}