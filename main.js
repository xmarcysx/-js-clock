const deg = 6;
const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');

const godzina = document.querySelector('.godzina');
const minuta = document.querySelector('.minuta');
const sekunda = document.querySelector('.sekunda');

setInterval(() => {
  let day = new Date();
  let hour = day.getHours() * 30;
  let minutes = day.getMinutes() * deg;
  let seconds = day.getSeconds() * deg;

  godzina.innerHTML = day.getHours();
  minuta.innerHTML = day.getMinutes();
  sekunda.innerHTML = day.getSeconds();

  hr.style.transform = `rotateZ(${hour + minutes / 12}deg)`;
  mn.style.transform = `rotateZ(${minutes}deg)`;
  sc.style.transform = `rotateZ(${seconds}deg)`;
}, 1000);
