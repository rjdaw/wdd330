let ol = document.querySelector('ol');

function toggleMenu () {
    document.getElementById("responsive-nav").classList.toggle("hide");
}

const links = [
    {
        label: "Week 1 Notes",
        url: "../week1/index.html",
        class: "notes"
    },
    {
        label: "Week 2 Notes",
        url: "../week2/index.html",
        class: "notes"
    },
    {
        label: "Week 3 Notes",
        url: "../week3/index.html",
        class: "notes"
    },
    {
        label: "Week 4 Notes",
        url: "../week4/index.html",
        class: "notes"
    },
    {
        label: "Week 5 Notes",
        url: "../week5/index.html",
        class: "notes"
    },
    {
        label: "To Do List",
        url: "../todo/index.html",
        class: "project"
    },
    {
        label: "Week 7 Notes",
        url: "../week7/index.html",
        class: "notes"
    },
    {
        label: "Week 8 Notes",
        url: "../week8/index.html",
        class: "notes"
    },
    {
        label: "Week 9 Notes",
        url: "../week9/index.html",
        class: "notes"
    },
    {
        label: "Week 10 Notes",
        url: "../week10/index.html",
        class: "notes"
    }
];

links.forEach(
    link => {
        ol.innerHTML +=
        `<li class="${link.class}"><a href="${link.url}">${link.label}</a></li>`;
    }
);