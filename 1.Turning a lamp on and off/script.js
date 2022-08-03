////////first way////////

let lamp = document.querySelector("img");
let button = document.querySelector("button");
let flag = 0;

function turnOnAndOff() {
  if (flag) {
    lamp.src = "images/bulboff.gif";
    button.innerHTML = "Turn on";
    flag = 0;
  } else {
    lamp.src = "images/bulbon.gif";
    button.innerHTML = "Turn off";
    flag = 1;
  }
}

button.addEventListener("click", turnOnAndOff);
