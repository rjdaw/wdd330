const firstName = 'Ruben';
const lastName = 'Dawagne';

const section1 = document.querySelector('.js-testing');

const div1 = document.createElement('div');
div1.setAttribute('id', 'div1');
div1.classList.add('emphasize');

div1.textContent = firstName;

section1.appendChild(div1);

const div2 = document.createElement('div');
div2.textContent = lastName;

section1.appendChild(div2);