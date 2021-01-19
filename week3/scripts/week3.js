// const firstName = 'Ruben';
// const lastName = 'Dawagne';

const student = {
    firstName: 'Ruben',
    lastName: 'Dawagne',
    age: 26,
    iNumber: '255950416',
    hobbies: [
        'soccer',
        'board games',
        'programming',
    ],
    favoriteBook: {
        title: "La Panthere Noire",
        author: "Regis Montulet"
    }
};

const section1 = document.querySelector('.js-testing');

const div1 = document.createElement('div');
div1.setAttribute('id', 'div1');
div1.classList.add('emphasize');

div1.textContent = student.firstName;

section1.appendChild(div1);

const div2 = document.createElement('div');
div2.textContent = student.lastName;

section1.appendChild(div2);

const div3 = document.createElement('div');
div3.textContent = student.favoriteBook.author;

section1.appendChild(div3);

const div4 = document.createElement('div');
// div4.textContent = student.hobbies.join(', ');

const ul = document.createElement('ul');
student.hobbies.forEach(
    hobby => {
        const li = document.createElement('li');
        li.textContent = hobby;
        ul.appendChild(li);
    }
);

div4.innerHTML += `<h4>Hobbies</h4>`;
div4.appendChild(ul);

section1.appendChild(div4);