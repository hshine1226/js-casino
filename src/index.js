// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const range = document.querySelector("#js-range");
const numRange = document.querySelector("#js-numRange");
const input = document.querySelector("#js-input");
const playBtn = document.querySelector("#js-playBtn");
const result = document.querySelector(".result");
const resultSpan1 = document.querySelector("#js-resultSpan1");
const resultSpan2 = document.querySelector("#js-resultSpan2");
const resultSpan3 = document.querySelector("#js-resultSpan3");
let gNum = 100;

function handleRange(event) {
  const value = event.target.value;
  gNum = value;
  numRange.innerText = `Generate a number between 0 and ${value}`;
}

function paintResult(num, randomNum) {
  if (parseInt(num) === randomNum) {
    resultSpan1.innerText = `당신의 수 ${num}`;
    resultSpan2.innerText = `저의 수 ${randomNum}`;
    resultSpan3.innerText = `우와 이겼네요!`;
  } else {
    resultSpan1.innerText = `당신의 수 ${num}`;
    resultSpan2.innerText = `저의 수 ${randomNum}`;
    resultSpan3.innerText = `제가 이겼네요...`;
  }
}

function getRandomNumber(num) {
  const randomNumber = Math.floor(Math.random() * num + 1);
  return randomNumber;
}

function handleGuessNum() {
  if (input.value) {
    const num = input.value;
    const randomNumber = getRandomNumber(gNum);
    paintResult(num, randomNumber);
  }
}

input.addEventListener("change", handleGuessNum);
playBtn.addEventListener("click", handleGuessNum);
range.addEventListener("input", handleRange);
