let ol = document.querySelector('ol');

const links = [
    {
      label: "Week1 Notes",
      url: "week1/notes.html"
    }
  ];

links.forEach (
    link => {
        ol.innerHTML += 
        `<li><a href="${link.url}">${link.label}</a></li>`;
    }
)

//Display local storage
const inputKey   = document.getElementById("inputKey");
const inputValue = document.getElementById("inputValue");
const insert     = document.getElementById("insert");
const lsOutput   = document.getElementById("lsOutput");

insert.onclick = function () {
  const key = inputKey.value;
  const value = inputValue.value;

  if (key && value) {
    localStorage.setItem(key, value);
    location.reload();
  }
};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  lsOutput.innerHTML += `${key}: ${value}<br>`;
}