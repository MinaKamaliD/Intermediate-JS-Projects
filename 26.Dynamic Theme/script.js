let colors = document.querySelectorAll(".btn");

colors.forEach(function (color) {
  color.addEventListener("click", function (event) {
    let btnColor = event.target.dataset.color;

    document.documentElement.style.setProperty("--theme-color", btnColor);
  });
});
