let title = document.querySelector("title");
let c = document.querySelector(".C");
let f = document.querySelector(".F");
let tempInput = document.querySelector("#converter");
let result = document.querySelector(".result");
let convertButton = document.querySelector(".convertButton");
let resetButton = document.querySelector(".resetButton");
let changeButton = document.querySelector(".changeButton");
let scale = "c";

function changeScale() {
  if (scale === "c") {
    title.innerHTML = "Temperature Convertor | °F to °C";
    scale = "f";

    c.innerHTML = "°F";
    f.innerHTML = "°C";

    tempInput.placeholder = "°F";
  } else {
    title.innerHTML = "Temperature Convertor | °C to °F";
    scale = "c";

    c.innerHTML = "°C";
    f.innerHTML = "°F";

    tempInput.placeholder = "°C";
  }
}

changeButton.addEventListener("click", changeScale);
