let contextMenu = document.getElementById("contextMenu");

function showMenu(ev) {
  console.log(ev);
  ev.preventDefault();
  contextMenu.style.display = "block";
  contextMenu.style.left = ev.pageX;
  contextMenu.style.top = ev.pageY;
}
function menuDisappear(event) {
  if (event.key === "Escape") {
    contextMenu.style.display = "none";
  }
}
function menuClickDisappear() {
  contextMenu.style.display = "none";
}

window.addEventListener("contextmenu", showMenu);
window.addEventListener("keydown", menuDisappear);
window.addEventListener("click", menuClickDisappear);
