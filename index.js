const tableContent = document.querySelector("tbody");
const bookName = document.querySelector("#name");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookRead = document.querySelector("#status");
const dialog = document.querySelector("dialog");
const dialogBtn = document.querySelector("dialog + button");
const submitBtn = document.querySelector("#add-book");

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.setAttribute("type", "button");

const myLibrary = [];

function Book(name, author, pages, status) {
  this.name = name,
  this.author = author,
  this.pages = pages,
  this.status = status;
}

function addBookToLibrary(e) {
    e.preventDefault();

    const newBook = new Book(bookName.value, bookAuthor.value, bookPages.value, bookRead.checked);
    myLibrary.push(newBook);
    console.log(myLibrary);

    const row = document.createElement('tr');
    const nameData = document.createElement("td");
    const authorData = document.createElement("td");
    const pagesData = document.createElement("td");
    const statusData = document.createElement("td");

    nameData.textContent = bookName.value;
    authorData.textContent = bookAuthor.value;
    pagesData.textContent = bookPages.value;
    console.log(bookRead.value);
    statusData.textContent = bookRead.checked == true ? "Read" : "Not Read";

    row.appendChild(nameData);
    row.appendChild(authorData);
    row.appendChild(pagesData);
    row.appendChild(statusData);

    deleteBtn.setAttribute("data-index", myLibrary.length-1);
    deleteBtn.addEventListener("click", removeBook);
    row.appendChild(deleteBtn);

    tableContent.append(row);

    dialog.close();
}

function removeBook(e) {
    const index = e.target.dataset.index;
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    e.target.parentNode.remove();
}

dialogBtn.addEventListener("click", function() {
    dialog.showModal();
})
submitBtn.addEventListener("click", addBookToLibrary);
