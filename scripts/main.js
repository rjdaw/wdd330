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
        label: "Team activity 2",
        url: "../week2/team-activity-2.html",
        class: "team"
    },
    {
        label: "Week 3 Notes",
        url: "../week3/index.html",
        class: "notes"
    },
    {
        label: "Team activity 3",
        url: "../week3/team-activity.html",
        class: "team"
    },
    {
        label: "Week 4 Notes",
        url: "../week4/index.html",
        class: "notes"
    },
    {
        label: "Team activity 4",
        url: "../week4/tictactoe.html",
        class: "team"
    },
    {
        label: "Week 5 Notes",
        url: "../week5/index.html",
        class: "notes"
    },
    {
        label: "Team activity 5",
        url: "../week5/team-activity.html",
        class: "team"
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
        label: "Team activity 7",
        url: "../week7/hiking-complete.html",
        class: "team"
    },
    {
        label: "Week 8 Notes",
        url: "../week8/index.html",
        class: "notes"
    },
    {
        label: "Team activity 8",
        url: "../week8/team-activity.html",
        class: "team"
    },
    {
        label: "Week 9 Notes",
        url: "../week9/index.html",
        class: "notes"
    },
    {
        label: "Team activity 9",
        url: "../week9/index-START.html",
        class: "team"
    },
    {
        label: "Week 10 Notes",
        url: "../week10/index.html",
        class: "notes"
    },
    {
        label: "Team activity 10",
        url: "../week10/team-activity.html",
        class: "team"
    },
    {
        label: "iQuill Project",
        url: "../finalproject/index.html",
        class: "project"
    },
];

links.forEach(
    link => {
        ol.innerHTML +=
        `<li class="${link.class}"><a href="${link.url}">${link.label}</a></li>`;
    }
);