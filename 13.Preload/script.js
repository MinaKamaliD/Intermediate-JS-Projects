let loader = document.querySelector(".loader");

function showLoader() {
  loader.classList.add("hidden");
  loader.style.display = "flex";
}

window.addEventListener("load", showLoader);
