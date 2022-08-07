let title = document.querySelector("title");
let c = document.querySelector(".C");
let f = document.querySelector(".F");
let tempInput = document.querySelector("#converter");
let result = document.querySelector(".result");
let convertButton = document.querySelector(".convertButton");
let resetButton = document.querySelector(".resetButton");
let changeButton = document.querySelector(".changeButton");
let scale = "c";

////// change Button  //////

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

///// convert Button/////

function convertTemperature() {
  if (tempInput.value === "") {
    result.innerHTML = "insert a correct value";
    result.style.color = "#993300";
  } else {
    if (scale === "c") {
      result.style.display = "block";
      result.style.color = "rgb(255, 255, 102)";
      result.innerHTML = tempInput.value * 1.8 + 32 + " °F";
    } else {
      result.innerHTML = (((tempInput.value - 32) * 5) / 9).toFixed(2) + " °C";
      result.style.color = "rgb(255, 255, 102)";
    }
  }
}

/////reset Button////

function reset() {
  result.innerHTML = "";
  tempInput.value = "";
}

changeButton.addEventListener("click", changeScale);
convertButton.addEventListener("click", convertTemperature);
resetButton.addEventListener("click", reset);
