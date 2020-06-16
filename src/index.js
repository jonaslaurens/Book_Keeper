require("normalize.css/normalize.css");
require("./styles/index.scss");

const Library = require("./classes/Library");
const createTableRow = require("./utils");

document.addEventListener("DOMContentLoaded", () => {
  // create new library
  const newLibrary = new Library();

  // render books from library
  (() => {
    newLibrary.getBooks();
  })();

  // eventlistener for new book form
  addNewBook.addEventListener("click", () => {
    const newBookForm = document.querySelector("#newBookForm");
    newBookForm.style.display = "flex";
    addNewBook.style.display = "none";
  });

  // event listener to add a book
  addBook.addEventListener("click", e => {
    e.preventDefault();

    const newBookForm = document.querySelector("#newBookForm");

    const title = newBookForm[0].value;
    const author = newBookForm[1].value;
    const pages = newBookForm[2].value;

    const newBook = newLibrary.addBook(
      newBookForm,
      { title, author, pages },
      list
    );

    if (!newBook) return;

    // remove form from DOM
    newBookForm.style.display = "none";

    // set values to empty
    for (let i = 0; i <= 2; i++) {
      newBookForm[i].value = "";
    }

    addNewBook.style.display = "block";
  });
});
