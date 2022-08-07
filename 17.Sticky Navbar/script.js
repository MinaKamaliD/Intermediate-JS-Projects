let nav = document.getElementById("mainNav");
let logo = document.querySelector("img");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 0) {
    nav.classList.add("bg-black");
    nav.classList.add("txt-white");
    logo.style.height = "64px";
  } else {
    nav.classList.remove("bg-black");
    nav.classList.remove("txt-white");
    logo.style.height = "84px";
  }
});
