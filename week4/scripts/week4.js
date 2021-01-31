import {Student} from './student.js';

const students = [];

const student = new Student(
    'Ruben',
    'Dawagne',
    '225647524',
    ['The Book of Mormon', 'The Fellowship of the Ring', 'The Holy Bible']);

students.push(student);

const tbody = document.querySelector('tbody');


tbody.innerHTML = students.map (
    student =>
    `
    <tr>
        <td>${student.FirstName}</td>
        <td>${student.LastName}</td>
        <td>${student.INumber}</td>
    </tr>
    `
).join(''); //removes the comma