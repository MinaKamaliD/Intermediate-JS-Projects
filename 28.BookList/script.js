let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let yearInput = document.getElementById("year");
let btn = document.querySelector(".btn");
let bookContainer = document.querySelector("#book-list");

let bookArray = [];

function addBook(event) {
  event.preventDefault();

  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    yearInput.value === ""
  ) {
    alert("Please insert all the inputs.");
  } else {
    let newBookObject = {
      id: bookArray.length + 1,
      title: titleInput.value,
      author: authorInput.value,
      year: yearInput.value,
    };

    bookArray.push(newBookObject);

    setIntoLocalStorage(bookArray);
    booksGenerator(bookArray);
    makeInputsEmpty();
  }
}

function setIntoLocalStorage(allBooksArray) {
  localStorage.setItem("books", JSON.stringify(allBooksArray));
}

function makeInputsEmpty() {
  titleInput.value = "";
  authorInput.value = "";
  yearInput.value = "";
}

function booksGenerator(allBooksArray) {
  bookContainer.innerHTML = "";
  allBooksArray.forEach(function (book) {
    let titleTh = document.createElement("th");
    titleTh.innerHTML = book.title;

    let authorTh = document.createElement("th");
    authorTh.innerHTML = book.author;

    let yearTh = document.createElement("th");
    yearTh.innerHTML = book.year;

    let bookTr = document.createElement("tr");

    bookTr.append(titleTh, authorTh, yearTh);
    bookContainer.append(bookTr);
  });
}

function getBooksFromLocalStorage() {
  let localStorageBooks = localStorage.getItem("books");

  if (localStorageBooks) {
    bookArray = JSON.parse(localStorageBooks);
    booksGenerator(bookArray);
  }
}

window.addEventListener("load", getBooksFromLocalStorage);

btn.addEventListener("click", addBook);
