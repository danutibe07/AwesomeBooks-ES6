const listOfBooks = document.getElementById('booklist');
const addBooktoLib = document.getElementById('addbooks');
const contactMe = document.getElementById('contact-info');
const Libray = document.getElementById('libray');
const addForm = document.getElementById('form');
const contact = document.getElementById('contact');
//Navigation for navbar
listOfBooks.addEventListener('click', () => {
  Libray.classList.remove('hidden');
  addForm.classList.add('hidden');
  contact.classList.add('hidden');
  listOfBooks.classList.add('active');
  addBooktoLib.classList.remove('active');
  contactMe.classList.remove('active');
});

addBooktoLib.addEventListener('click', () => {
  Libray.classList.add('hidden');
  addForm.classList.remove('hidden');
  contact.classList.add('hidden');
  listOfBooks.classList.remove('active');
  addBooktoLib.classList.add('active');
  contactMe.classList.remove('active');
});

contactMe.addEventListener('click', () => {
  Libray.classList.add('hidden');
  addForm.classList.add('hidden');
  contact.classList.remove('hidden');
  listOfBooks.classList.remove('active');
  addBooktoLib.classList.remove('active');
  contactMe.classList.add('active');
});

//Creating a class for title and author
class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}