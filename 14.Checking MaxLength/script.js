let usernameInput = document.querySelector("input");
let counter = document.querySelector(".counter");
let maxLength = counter.innerHTML;

usernameInput.addEventListener("keyup", function () {
  counter.innerHTML = maxLength - usernameInput.value.length;
});
