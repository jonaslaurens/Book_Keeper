const Book = require("./Book");
const isValidBook = require("./validation/isValidBook");
const createTableRow = require("../utils");

class Library {
  constructor() {
    this.books = [];
  }

  getBooks() {
    // get books from localstorage if they exist
    if (localStorage.getItem("library")) {
      this.books = JSON.parse(localStorage.getItem("library"));
    }

    const list = document.querySelector("#list");

    this.books = this.books.map(book => {
      const { title, author, pages, status, id } = book;
      const newBook = new Book(title, author, pages, status, id);
      list.append(createTableRow(newBook, this));
      return newBook;
    });

    return this.books;
  }

  addBook(el, book, list) {
    // if not a valid book return and don't add. validation takes care of responses to user
    if (!isValidBook(el, book)) return;

    // create new book
    const newBook = new Book(book.title, book.author, book.pages);

    // add new book to the books array
    this.books.push(newBook);

    // create new row
    list.append(createTableRow(newBook, this));

    // update localstorage
    this.updateLibraryInLocalStorage();

    return newBook;
  }

  updateBook() {
    this.books.forEach(book => {
      console.log(book instanceof Book);
      /* if(book.id === id) {
        
      } */
    });
  }

  removeBook(e) {
    const currentItem = e.target.parentElement.parentElement;
    let index;

    // remove from DOM
    currentItem.parentElement.removeChild(currentItem);

    // find index of the item in the library
    this.books.forEach(book => {
      if (book.id === e.target.parentElement.parentElement.value) {
        index = this.books.indexOf(book);
        return;
      }
    });

    // remove the item from the library and update LS with new library
    if (index > -1) {
      this.books.splice(index, 1);
      this.updateLibraryInLocalStorage();
    }
  }

  updateLibraryInLocalStorage() {
    localStorage.setItem("library", JSON.stringify(this.books));
  }

  addDummyBooks() {
    const starterBooks = [
      { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295 },
      {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        pages: 332
      }
    ];

    const start = starterBooks.map(book => {
      const newBook = new Book(book.title, book.author, book.pages);
      return newBook;
    });

    localStorage.setItem("library", JSON.stringify(start));
    this.books = start;
  }

  updateBook() {
    this.books.forEach(book => {
      console.log(book instanceof Book);
      /* if(book.id === id) {
        
      } */
    });
  }
}

module.exports = Library;
