let range = document.getElementById("range");

function changeBrightness() {
  document.body.style.filter = "brightness(" + range.value + "%)";
}

range.addEventListener("change", changeBrightness);
