let ol = document.querySelector('ol');

const links = [
    {
        label: "Week 1 Notes",
        url: "week1/notes.html"
    }
];

links.forEach(
    link => {
        ol.innerHTML +=
        `<li><a href="${link.url}">${link.label}</a></li>`;
    }
);