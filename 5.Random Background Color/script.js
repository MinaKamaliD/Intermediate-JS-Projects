function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor =
    "RGB(" + red + "," + green + "," + blue + ")";
}

setInterval(randomColor, 2000);
