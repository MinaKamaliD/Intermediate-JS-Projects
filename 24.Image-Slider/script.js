let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let sliderItem = document.querySelector("img");

let imgSrcArray = ["image/1.jpg", "image/2.png", "image/3.jpg"];
let imgIndex = 0;

function goNext() {
  imgIndex++;
  if (imgIndex > imgSrcArray.length - 1) {
    imgIndex = 0;
  }
  sliderItem.setAttribute("src", imgSrcArray[imgIndex]);
}

function goPrev() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = imgSrcArray.length - 1;
  }
  sliderItem.setAttribute("src", imgSrcArray[imgIndex]);
}

next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);
setInterval(goNext, 3000);
