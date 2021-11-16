"use strict";

let handleClick = function (event) {
  document.querySelector("#result").value += event.target.value;
};
const handleClear = function (event) {
  document.querySelector("#result").value = "";
};
let handleSolve = function () {
  let d = document.querySelector("#result").value;
  let result = eval(d);
  document.querySelector("#result").value = result;
};
