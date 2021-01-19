// const firstName = 'Ruben';
// const lastName = 'Dawagne';

const student = {
    firstName: 'Ruben',
    lastName: 'Dawagne'
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