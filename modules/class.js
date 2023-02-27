// Book Class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
// Local Storage
export class Store {
  static getBooks() {
    let books;
    // console.log(localStorage.getItem('books'))
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(target) {
    let books = Store.getBooks();
    const { title } = target.dataset;
    const { author } = target.dataset;
    books = books.filter(
      (item) => item.title !== title || item.author !== author,
    );
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// UI class
export default class Interface {
  static displayBooks() {
    // Looping through the array
    const books = Store.getBooks();
    const list = document.getElementById('books');
    list.innerHTML = '';
    books.forEach((book) => Interface.addBook(book));
  }

  // adding book to the Interface
  static addBook(book) {
    const list = document.getElementById('books');
    const bookDetails = document.createElement('article');
    bookDetails.innerHTML = `
        <div>"${book.title}" by ${book.author}</div>
        <button data-title="${book.title}" data-author="${book.author}" class="btn-danger delete">Remove</button>
        `;
    list.appendChild(bookDetails);
  }

  // clearing the input field after submitting
  static clearInputfield() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }

  // Deleting books
  static deleteBook(target) {
    if (target.classList.contains('delete')) {
      target.parentElement.remove();
      Store.removeBook(target);
      Interface.showAlert('Book has been deleted', 'error');
    }
  }

  // Alert to show suucess or failed message
  static showAlert(message, className) {
    // creating a div for two classes "Success and failed messages"
    const newdiv = document.createElement('div');
    // creating a Dynamic className for the div
    newdiv.className = `alert alert-${className}`;
    // appending an event for differnt messages
    newdiv.appendChild(document.createTextNode(message));
    const containerELement = document.querySelector('.addnewbook');
    const header = document.querySelector('.titletag');
    containerELement.insertBefore(newdiv, header);
    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
  }
}

document.onreadystatechange = () => {
  // Diplay book
  document.addEventListener('DOMContentLoaded', Interface.displayBooks());
  if (document.readyState === 'complete') {
    // Add book
    document.getElementById('addbook').addEventListener('click', (e) => {
      e.preventDefault();
      // get values from input
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;

      // Making sure the input field has a value
      if (title === '' || author === '') {
        Interface.showAlert('Fill all the input field', 'error');
      } else {
        Interface.showAlert('Book has been added to the Libray', 'success');
        // creating a const(book) for each of the new books
        const book = new Book(title, author);

        // Adding book to Interface
        // Interface.addBook(book);

        // store Book
        Store.addBook(book);

        // clearing the inputfield after submitting
        Interface.clearInputfield();
      }
    });

    // Remove book
    document.querySelector('#books').addEventListener('click', (e) => {
      Interface.deleteBook(e.target);
    });
  }
};
