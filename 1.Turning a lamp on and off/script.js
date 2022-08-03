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

/////// second way//////

// let button = document.querySelector("button");
// let flag = 0;
// let imgOff = document.createElement("img");
// imgOff.setAttribute("src", "offLamp.png");
// imgOff.setAttribute("height", "100px");
// document.body.append(imgOff);
// function turnOnOff() {
//   if (flag) {
//     imgOff.setAttribute("src", "offLamp.png");
//     imgOff.setAttribute("height", "100px");
//     button.innerHTML = "Turn On";
//     flag = 0;
//   } else {
//     imgOff.setAttribute("src", "onLamp.png");
//     imgOff.setAttribute("height", "100px");
//     button.innerHTML = "Turn Off";
//     flag = 1;
//   }
// }
// button.addEventListener("click", turnOnOff);
