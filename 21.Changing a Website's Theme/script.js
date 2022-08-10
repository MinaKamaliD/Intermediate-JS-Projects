let switchButton = document.querySelector(".switch");

function changeTheme() {
  document.body.classList.toggle("dark");

  if (document.body.className.includes("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function saveTheme() {
  let localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme === "dark") {
    document.body.classList.add("dark");
  }
}

switchButton.addEventListener("click", changeTheme);
window.addEventListener("load", saveTheme);
