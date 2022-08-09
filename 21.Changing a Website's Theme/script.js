let switchButton = document.querySelector(".switch");

function changeTheme() {
  document.body.classList.toggle("dark");
}

switchButton.addEventListener("click", changeTheme);
