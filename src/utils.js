const Book = require("./classes/Book");

const createTableRow = (book, library) => {
  // create table row
  const newTr = document.createElement("tr");

  // create update button
  const updateBtn = document.createElement("button");
  updateBtn.innerHTML = "No";
  updateBtn.classList.add("update");
  updateBtn.addEventListener("click", () =>
    book.updateStatus(event.target, library)
  );

  if (book.status) {
    updateBtn.classList.add("read");
    updateBtn.innerHTML = "Yes";
  } else {
    updateBtn.classList.remove("read");
    updateBtn.innerHTML = "No";
  }

  // create remove button
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "X";
  removeBtn.classList.add("remove");
  removeBtn.addEventListener("click", () => library.removeBook(event));

  // add book id to tr
  newTr.value = book.id;

  const html = `
			<td>${book.title}</td>
			<td>${book.author}</td>
			<td>${book.pages}</td>
		`;

  newTr.innerHTML = html;

  const statusTD = document.createElement("td");
  const removeTD = document.createElement("td");

  statusTD.appendChild(updateBtn);
  removeTD.appendChild(removeBtn);

  newTr.append(statusTD);
  newTr.append(removeTD);

  return newTr;
};

module.exports = createTableRow;
