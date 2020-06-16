class Book {
  constructor(title, author, pages, status, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    status ? (this.status = status) : false;
    id ? (this.id = id) : (this.id = Math.floor(Math.random() * 999999999));
  }

  updateStatus(el, library) {
    if (!this.status) {
      el.classList.add("read");
      el.innerHTML = "Yes";
    } else {
      el.classList.remove("read");
      el.innerHTML = "No";
    }

    // change status of the book
    this.status = !this.status;

    // change the status in the library
    library.books.forEach(book => {
      if (book.id == this.id) {
        book.status = this.status;
      }
    });
    library.updateBook();

    library.updateLibraryInLocalStorage();
  }
}

module.exports = Book;
