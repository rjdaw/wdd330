let tasks = [];

window.onload = function() {
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
      "<div class='task'>" +
      tasks[i] +
      "<img class='checkmark' src='images/checkmark.png' onclick='strike(" + i + ")'><img class='archive' src='images/archive.png' onclick='archive(" + i + ")'></div><br>";
}

function archive(index) {
  tasks.splice(index, 1);
  if (localStorage.getItem("tasks") == null) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  display();
}

function strike(index) {
  if (tasks[index].includes("<strike>")) {
    tasks[index] = tasks[index].replace("<strike>", "");
  } else {
    tasks[index] = "<strike>" + tasks[index] + "</strike>";
  }
  if (localStorage.getItem("tasks") == null) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  display();
}