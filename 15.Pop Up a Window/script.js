let button = document.querySelector("button");
let modal = document.querySelector(".modal-parent");
let closeModal = document.querySelector(".X");
let section = document.querySelector("section");

function modalAppears() {
  modal.style.display = "block";
  section.style.filter = "blur(10px)";
  button.blur();
}
function modalDisappears() {
  modal.style.display = "none";
  section.style.filter = "blur(0)";
}

function modalDisappearsEscape(event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
    section.style.filter = "blur(0)";
  }
}

button.addEventListener("click", modalAppears);
closeModal.addEventListener("click", modalDisappears);
window.addEventListener("keydown", modalDisappearsEscape);
