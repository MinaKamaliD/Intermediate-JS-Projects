let usernameElement = document.querySelector(".username");
let passwordElement = document.querySelector(".password");
let usernameError = document.querySelector(".username-validation");
let passwordError = document.querySelector(".password-validation");

function checkUsernameLenght() {
  if (usernameElement.value.length < 12) {
    usernameError.style.display = "flex";
    usernameError.style.color = "red";
    usernameError.innerHTML = "Must Contain 12 Character!";
  } else {
    usernameError.innerHTML = "Correct username value!";
    usernameError.style.color = "green";
  }
}
function checkPasswordLenght() {
  if (passwordElement.value.length < 8) {
    passwordError.style.display = "flex";
    passwordError.style.color = "red";
    passwordError.innerHTML = "Must Contain 8 Characters!";
  } else {
    passwordError.style.color = "green";
    passwordError.innerHTML = "Correct password value!";
  }
}

usernameElement.addEventListener("keyup", checkUsernameLenght);
passwordElement.addEventListener("keyup", checkPasswordLenght);
