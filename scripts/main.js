let ol = document.querySelector('ol');

const links = [
    {
        label: "Week 1 Notes",
        url: "../week1/index.html"
    },
    {
        label: "Week 2 Notes",
        url: "../week2/index.html"
    },
    {
        label: "Week 3 Notes",
        url: "../week3/index.html"
    },
    {
        label: "Week 4 Notes",
        url: "../week4/index.html"
    },
    {
        label: "Week 5 Notes",
        url: "../week5/index.html"
    },
    {
        label: "To Do List",
        url: "../todo/index.html"
    }
];

links.forEach(
    link => {
        ol.innerHTML +=
        `<li><a href="${link.url}">${link.label}</a></li>`;
    }
);