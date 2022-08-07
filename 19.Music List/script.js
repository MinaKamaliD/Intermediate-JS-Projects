let songIcons = document.querySelectorAll("i");
let songs = document.querySelectorAll("audio");
let songInfo;

songIcons.forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    songInfo = event.target.dataset.name;

    songs.forEach(function (song) {
      if (song.dataset.name === songInfo) {
        song.currentTime = 0;
        song.play();
      } else {
        song.pause();
      }
    });
  });
});
