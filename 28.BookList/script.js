let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let yearInput = document.getElementById("year");
let btn = document.querySelector(".btn");
let bookContainer = document.querySelector(".table");
let bookArray = [];

function addBook(event) {
  event.preventDefault();

  let newBookObject = {
    id: bookArray.length + 1,
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
  };

  bookArray.push(newBookObject);

  setIntoLocalStorage(bookArray);
  makeInputsEmpty();
}

function setIntoLocalStorage(allBooksArray) {
  localStorage.setItem("books", JSON.stringify(allBooksArray));
}

function makeInputsEmpty() {
  titleInput.value = "";
  authorInput.value = "";
  yearInput.value = "";
}

btn.addEventListener("click", addBook);
