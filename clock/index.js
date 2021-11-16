"use strict mode";
console.log("index.js");
// setInterval(showtime(), 1000);
// const showtime = function () {
//   let date = new Date();
//   document.querySelector(".clock").textContent = date;
// };
// showtime();
setInterval(() => {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
    console.log("inner line 16:" + hour);
  }
  if (hour == 0) {
    hour = 12;
    am_pm = "AM";
    console.log("inner line 16:" + hour);
  }

  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  document.querySelector(
    ".clock"
  ).textContent = `${hour}:${minute}:${second} ${am_pm}`;
}, 1000);
