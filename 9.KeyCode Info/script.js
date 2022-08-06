let starterPage = document.getElementById("starter");
let keycodePage = document.getElementById("infos");
let heading = document.getElementById("heading");
let ascii = document.getElementById("ascii");
let keycode = document.getElementById("keyCode");
let key = document.getElementById("key");
let keyLocation = document.getElementById("location");
let which = document.getElementById("which");
let code = document.getElementById("code");

function showKeycodePage(event) {
  starterPage.style.display = "none";
  keycodePage.style.display = "flex";
  heading.style.display = "flex";
  ascii.style.display = "flex";

  keycode.innerHTML = event.keyCode;
  key.innerHTML = event.key;
  keyLocation.innerHTML = event.location;
  which.innerHTML = event.which;
  code.innerHTML = event.code;
}

window.addEventListener("keydown", showKeycodePage);
