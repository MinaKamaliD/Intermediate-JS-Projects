let title = document.querySelector(".title");

function showKeys(event) {
  title.innerHTML += event.key;

  let keyId = event.key.toUpperCase();
  let key = document.getElementById(keyId);

  key.classList.add("hit");

  key.addEventListener("animationend", function () {
    key.classList.remove("hit");
  });
}

window.addEventListener("keydown", showKeys);
