const hourEl = document.querySelector(".hands .hour");
const minuteEl = document.querySelector(".hands .minute");
const secondEl = document.querySelector(".hands .second");

function clock() {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();
  setInterval(clock, 1000);
  const hourDeg = (hour / 12) * 360;
  const minuteDeg = (minute / 60) * 360;
  const secondDeg = (second / 60) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

clock();
