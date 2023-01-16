// DOM => Document Object Model
// BOM => Browser Object Model

let users = [
  { id: 1, name: "Hoda", age: 33 },
  { id: 2, name: "Reza", age: 39 },
  { id: 3, name: "Ali", age: 24 },
  { id: 4, name: "Hasan", age: 19 },
  { id: 5, name: "Kurosh", age: 33 },
  { id: 6, name: "Mina", age: 32 },
];

let userInfo = document.querySelector("h1");
let locationSearch = new URLSearchParams(location.search);
let userId = locationSearch.get("id");

let mainUser = users.find(function (user) {
  return user.id == userId;
});
if (mainUser) {
  userInfo.innerHTML = "Name:" + mainUser.name + "| Age:" + mainUser.age;
} else userInfo.innerHTML = "Use Is Not Defined";
