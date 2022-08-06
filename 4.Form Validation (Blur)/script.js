let usernameElement = document.querySelector(".username");
let passwordElement = document.querySelector(".password");
let usernameAlert = document.querySelector(".username-validation");
let passwordAlert = document.querySelector(".password-validation");

function checkUsername() {
  if (usernameElement.value.length < 12) {
    usernameAlert.innerHTML = "The username is too short";
    usernameAlert.style.display = "block";
    usernameAlert.style.color = "red";
  } else {
    usernameAlert.style.display = "block";
    usernameAlert.innerHTML = "The username is ok now!";
    usernameAlert.style.color = "green";
  }
}

function checkPassword() {
  if (passwordElement.value.length < 8) {
    passwordAlert.innerHTML = "The password is too short";
    passwordAlert.style.display = "block";
    passwordAlert.style.color = "red";
  } else {
    passwordAlert.style.display = "block";
    passwordAlert.innerHTML = "The password is ok now!";
    passwordAlert.style.color = "green";
  }
}

usernameElement.addEventListener("blur", checkUsername);
passwordElement.addEventListener("blur", checkPassword);
