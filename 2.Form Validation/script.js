let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let loginBtn = document.querySelector("button");
let modal = document.querySelector(".modal");

function checkTheLength() {
  if (usernameInput.value.length < 12 || passwordInput.value.length < 8) {
    modal.style.backgroundColor = "#DF1C1C";
    modal.innerHTML = "Please Enter the Correct Information!";
  } else {
    modal.style.backgroundColor = "green";
    modal.innerHTML = "You Logged in Successfully!";
  }

  modal.style.display = "block";
  function modalDisappear() {
    modal.style.display = "none";
  }

  let timeout = setTimeout(modalDisappear, 5000);
}

loginBtn.addEventListener("click", checkTheLength);
