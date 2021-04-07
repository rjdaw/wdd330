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
window.burn = burn;
window.edit = edit;
window.correct = correct;

function addNote() {
  if (!isEmpty(document.querySelector("#name").value)) {
    let itemName = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;

    let note = new Note(itemName, description);
    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    display();
    document.querySelector("#name").value = "";
    document.querySelector("#description").value = "";
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
    "</span><img class='delete-flame' src='images/delete-flame.png' onclick='burn(" + i + ")'><img class='edit-quill' src='images/edit-quill.png' onclick='edit(" + i + ")'></div>";
}

function unroll(index) {
  if (document.querySelectorAll(`.notenumber${index} .description`).length < 1) {
    if (notes[index].description.length > 0) {
      let description = document.createElement('p');
      description.setAttribute("class", "description");
      description.innerHTML = "<span class='gm-desc-h'>GM Description</span>: <span class='gm-desc'>" + notes[index].description + "</span>";
      document.querySelector(`.notenumber${index}`).appendChild(description);
    } else {
      alert('No description was found for this item.');
    }
  } else {
    document.querySelector(`.notenumber${index} .description`).remove();
  }
}

function edit(index) {
  document.getElementById("edit-template").style.display = "flex";
  let noteName = notes[index].name;
  document.querySelector("#new-name").value = noteName;
  let noteDesc = notes[index].description;
  document.querySelector("#new-description").value = noteDesc;
  document.getElementById("edit-note").setAttribute('onclick', `correct(${index})`);
}

function correct(index) {
  if (!isEmpty(document.querySelector("#new-name").value)) {
    let newItemName = document.querySelector("#new-name").value;
    let newDescription = document.querySelector("#new-description").value;

    notes[index].name = newItemName;
    notes[index].description = newDescription;

    localStorage.setItem("notes", JSON.stringify(notes));

    display();
    document.getElementById("edit-template").style.display = "none";
  } else {
    alert("Please give a name to your item.")
  }

  let allNotes = document.querySelectorAll(".note");
  for (let i = 0; i < allNotes.length; i++) {
    document.querySelector(`.notenumber${i}`).style.backgroundColor = "rgba(94, 100, 125, 0.5)";
  }
}

function burn(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  display();
}

function nightMode() {
  document.getElementsByTagName("body")[0].style.color = "#c5f9a3";
  document.getElementsByTagName("body")[0].style.background = "url(images/night-background.jfif";
  document.querySelector("#add-note").style.color = "#c5f9a3";
  document.querySelector("#add-note").style.background = "#000940";
  document.querySelector("#edit-note").style.color = "#c5f9a3";
  document.querySelector("#edit-note").style.background = "#000940";
  document.querySelector(".access-template").style.color = "#c5f9a3";
  document.querySelector(".access-template").style.background = "#000940";
  document.querySelector(".drop-quill").style.color = "white";
  document.querySelector("#night-mode").style.display = "none";
  document.querySelector("#day-mode").style.display = "block";
  document.getElementsByTagName("input")[0].style.borderBottom = "1px solid #c5f9a3";
  document.getElementsByTagName("input")[1].style.borderBottom = "1px solid #c5f9a3";
  document.getElementsByTagName("input")[0].style.color = "#c5f9a3";
  document.getElementsByTagName("input")[1].style.color = "#c5f9a3";
  document.getElementsByTagName("input")[2].style.borderBottom = "1px solid #c5f9a3";
  document.getElementsByTagName("input")[3].style.borderBottom = "1px solid #c5f9a3";
  document.getElementsByTagName("input")[2].style.color = "#c5f9a3";
  document.getElementsByTagName("input")[3].style.color = "#c5f9a3";

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
  document.querySelector("#edit-note").style.color = "black";
  document.querySelector("#edit-note").style.background = "#e16b5a";
  document.querySelector(".access-template").style.color = "black";
  document.querySelector(".access-template").style.background = "#e16b5a";
  document.querySelector(".drop-quill").style.color = "#e16b5a";
  document.querySelector("#night-mode").style.display = "block";
  document.querySelector("#day-mode").style.display = "none";
  document.getElementsByTagName("input")[0].style.borderBottom = "1px solid black";
  document.getElementsByTagName("input")[1].style.borderBottom = "1px solid black";
  document.getElementsByTagName("input")[0].style.color = "black";
  document.getElementsByTagName("input")[1].style.color = "black";
  document.getElementsByTagName("input")[2].style.borderBottom = "1px solid black";
  document.getElementsByTagName("input")[3].style.borderBottom = "1px solid black";
  document.getElementsByTagName("input")[2].style.color = "black";
  document.getElementsByTagName("input")[3].style.color = "black";
  let allNotes = document.querySelectorAll(".note");
  for (let i = 0; i < allNotes.length; i++) {
    document.querySelector(`.notenumber${i}`).style.backgroundColor = "rgba(255,235,205, .5)";
  }
}