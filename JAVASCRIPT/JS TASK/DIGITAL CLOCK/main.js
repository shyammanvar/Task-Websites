const hoursEl = document.getElementById("hours");

const minutesEl = document.getElementById("minutes");

const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm;

  let x = h - 12;
  if (x < 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  h = h > 10 ? "" + h : h;
  m = m > 10 ? "" + m : m;
  s = s > 10 ? "" + s : s;

  h = h < 10 ? "" + h : h;
  m = m < 10 ? "" + m : m;
  s = s < 10 ? "" + s : s;

  hoursEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;
  ampmEl.innerHTML = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
