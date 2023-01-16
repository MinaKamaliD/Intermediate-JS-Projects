let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

setInterval(setTheTime, 1000);

function setTheTime() {
  let time = new Date();
  if (time.getHours() < 10) {
    hour.innerHTML = "0" + time.getHours();
  } else {
    hour.innerHTML = time.getHours();
  }

  if (time.getMinutes() < 10) {
    minute.innerHTML = "0" + time.getMinutes();
  } else {
    minute.innerHTML = time.getMinutes();
  }

  if (time.getSeconds() < 10) {
    seconds.innerHTML = "0" + time.getSeconds();
  } else {
    seconds.innerHTML = time.getSeconds();
  }
}
