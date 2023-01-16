let customScroll = document.getElementById("scroll");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let documentHeight = document.body.clientHeight;
  let windowHeight = window.innerHeight;
  let scrollPercent = Math.round(
    (scrollTop / (documentHeight - windowHeight)) * 100
  );
  customScroll.style.width = scrollPercent + "%";
});
