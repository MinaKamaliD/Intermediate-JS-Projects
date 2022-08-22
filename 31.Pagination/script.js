const itemsList = [
  { id: 1, name: "Mina", family: "Kamali" },
  { id: 2, name: "Kurosh", family: "Afshar" },
  { id: 3, name: "Hossein", family: "Mohammadi" },
  { id: 4, name: "Susan", family: "Shad" },
  { id: 5, name: "Karim", family: "Zamani" },

  { id: 6, name: "Amin", family: "Saeedi Rad" },
  { id: 7, name: "Amir", family: "Zehtab" },
  { id: 8, name: "Qadir", family: "Yolme" },
  { id: 9, name: "Babak", family: "Mohammadi" },
  { id: 10, name: "Hasan", family: "Ghahreman Zadeh" },

  { id: 11, name: "Saeed", family: "Ehsani" },
  { id: 12, name: "Siamak", family: "Modiri" },
  { id: 13, name: "Mohsen", family: "Ansari" },
  { id: 14, name: "Mehran", family: "Ali Pour" },
  { id: 15, name: "Amir Hossein", family: "Mahtabi" },

  { id: 16, name: "Hossein", family: "Amino" },
  { id: 17, name: "Melika", family: "Ehsani" },
  { id: 18, name: "Qadir", family: "Yolme" },
  { id: 19, name: "Fatemeh", family: "Alilou" },
  { id: 20, name: "Ehsan", family: "Tayyebi" },

  { id: 21, name: "Zahra", family: "Gholami" },
  { id: 22, name: "Matin", family: "Sahebi" },
];
let usersList = document.getElementById("list");
let pageNumbers = document.getElementById("pagination");
let currentPage = 1;
let rowsNumber = 5;

function displayUsersList(
  allUsersArray,
  usersContainer,
  rowsNumber,
  currentPage
) {
  usersContainer.innerHTML = "";
  let endIndex = rowsNumber * currentPage;
  let startIndex = endIndex - rowsNumber;

  let slicedUsers = allUsersArray.slice(startIndex, endIndex);

  slicedUsers.forEach(function (user) {
    let userElement = document.createElement("div");

    userElement.classList.add("item");

    userElement.innerHTML = user.name + " " + user.family;

    usersList.append(userElement);
  });
}

function setupPagination(allUsersArray, pagesContainer, rowsNumber) {
  pagesContainer.innerHTML = "";

  let pagesNumber = Math.ceil(allUsersArray.length / rowsNumber);

  for (i = 1; i < pagesNumber + 1; i++) {
    let btn = pageButttonGenerator(i, allUsersArray);

    pagesContainer.append(btn);
  }
}

function pageButttonGenerator(page, allUsersArray) {
  let button = document.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", function () {
    currentPage = page;

    displayUsersList(allUsersArray, usersList, rowsNumber, currentPage);

    let prevPage = document.querySelector(".active");
    prevPage.classList.remove("active");
    button.classList.add("active");
  });
  return button;
}

displayUsersList(itemsList, usersList, rowsNumber, currentPage);
setupPagination(itemsList, pageNumbers, rowsNumber);
