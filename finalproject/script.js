import {
  Note
} from "./note.js";

let notes = [];

window.onload = function () {
  if (JSON.parse(localStorage.getItem("notes")) != null)
    notes = JSON.parse(localStorage.getItem("notes"));
  display();
}

window.addNote = addNote;
window.nightMode = nightMode;
window.dayMode = dayMode;
window.unroll = unroll;

function addNote() {

  if (!isEmpty(document.querySelector("#name").value)) {
    let itemName = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;
    let forpcs = document.querySelector("#forpcs").value;

    let note = new Note(itemName, description, forpcs);
    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    console.log(notes);

    display();
    document.querySelector("#name").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#forpcs").value = "";
  } else {
    alert("Please give a name to your item.")
  }
}

function isEmpty(str) {
  return (!str || str.length === 0);
}

function display() {
  document.querySelector(".all-notes").innerHTML = "";
  for (let i = 0; i < notes.length; i++)
    document.querySelector(".all-notes").innerHTML +=
    "<div class='note notenumber" + `${i}` + "'><span class='note-text' onclick='unroll(" + i + ")'>" +
    notes[i].name +
    "</span><img class='delete-flame' src='images/delete-flame.png'><img class='edit-quill' src='images/edit-quill.png'></div>";
}

function unroll(index) {
  if (document.querySelectorAll(`.notenumber${index} .description`).length < 1) {
    let description = document.createElement('p');
    description.setAttribute("class", "description");
    description.innerHTML = "<span class='gm-desc-h'>GM Description</span>: <span class='gm-desc'>" + notes[index].description + "</span>";
    document.querySelector(`.notenumber${index}`).appendChild(description);
  } else {
    document.querySelector(`.notenumber${index} .description`).remove();
  }
}

function nightMode() {
  document.getElementsByTagName("body")[0].style.color = "#c5f9a3";
  document.getElementsByTagName("body")[0].style.background = "url(images/night-background.jfif";
  document.querySelector("#add-note").style.color = "#c5f9a3";
  document.querySelector("#add-note").style.background = "#000940";
  document.querySelector(".access-template").style.color = "#c5f9a3";
  document.querySelector(".access-template").style.background = "#000940";
  document.querySelector(".drop-quill").style.color = "white";
  document.querySelector("#night-mode").style.display = "none";
  document.querySelector("#day-mode").style.display = "block";
  document.getElementsByTagName("input")[0].style.borderBottom = "1px solid #c5f9a3";
  document.getElementsByTagName("input")[1].style.borderBottom = "1px solid #c5f9a3";
  document.getElementsByTagName("input")[2].style.borderBottom = "1px solid #c5f9a3";
  let allNotes = document.querySelectorAll(".note");
  for (let i = 0; i < allNotes.length; i++) {
    document.querySelector(`.notenumber${i}`).style.backgroundColor = "rgba(94, 100, 125, 0.5)";
  }
}

function dayMode() {
  document.getElementsByTagName("body")[0].style.color = "black";
  document.getElementsByTagName("body")[0].style.background = "url(images/parchemin.jpg";
  document.querySelector("#add-note").style.color = "black";
  document.querySelector("#add-note").style.background = "#e16b5a";
  document.querySelector(".access-template").style.color = "black";
  document.querySelector(".access-template").style.background = "#e16b5a";
  document.querySelector(".drop-quill").style.color = "#e16b5a";
  document.querySelector("#night-mode").style.display = "block";
  document.querySelector("#day-mode").style.display = "none";
  document.getElementsByTagName("input")[0].style.borderBottom = "1px solid black";
  document.getElementsByTagName("input")[1].style.borderBottom = "1px solid black";
  document.getElementsByTagName("input")[2].style.borderBottom = "1px solid black";
  let allNotes = document.querySelectorAll(".note");
  for (let i = 0; i < allNotes.length; i++) {
    document.querySelector(`.notenumber${i}`).style.backgroundColor = "rgba(255,235,205, .5)";
  }
}