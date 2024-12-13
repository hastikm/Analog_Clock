let sec = document.querySelector('.sec');
let min = document.querySelector('.minute');
let hour = document.querySelector('.houre');
let deg = 6;

setInterval(clockHandler,1000);

function clockHandler() {
  let d = new Date();
  let h = d.getHours() * 30;
  let m = d.getMinutes() * deg;
  let s = d.getSeconds() * deg;

  hour.style.transform = `rotate(${h + (m/12)}deg)`;
  sec.style.transform = `rotate(${s}deg)`;
  min.style.transform = `rotate(${m}deg)`;

}