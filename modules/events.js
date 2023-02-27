import {Interface , Store} from './class.js';
const listOfBooks = document.getElementById('booklist');
const addBooktoLib = document.getElementById('addbooks');
const contactMe = document.getElementById('contact-info');
const Boooks = document.getElementById('books');
const addForm = document.getElementById('form');
const contact = document.getElementById('contact');
const Header = document.getElementById('heading')
//Navigation for navbar
listOfBooks.addEventListener('click', () => {
  Boooks.classList.remove('hidden');
  addForm.classList.add('hidden');
  contact.classList.add('hidden');
  listOfBooks.classList.add('active');
  addBooktoLib.classList.remove('active');
  contactMe.classList.remove('active');
  Header.innerText = ("Awesome Libray");
  Interface.displayBooks();

});

addBooktoLib.addEventListener('click', () => {
  Boooks.classList.add('hidden');
  addForm.classList.remove('hidden');
  contact.classList.add('hidden');
  listOfBooks.classList.remove('active');
  addBooktoLib.classList.add('active');
  contactMe.classList.remove('active');
  Header.innerText = ("Add books to Libray")
});

contactMe.addEventListener('click', () => {
  Boooks.classList.add('hidden');
  addForm.classList.add('hidden');
  contact.classList.remove('hidden');
  listOfBooks.classList.remove('active');
  addBooktoLib.classList.remove('active');
  contactMe.classList.add('active');
  Header.innerText = ("Contact us")
});
