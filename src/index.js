// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const range = document.querySelector("#js-range");
const numRange = document.querySelector("#js-numRange");
const input = document.querySelector("#js-input");
const playBtn = document.querySelector("#js-playBtn");
const result = document.querySelector(".result");
const resultSpan = document.querySelector("#js-resultSpan");
let gNum = 100;

function handleRange(event) {
  const value = event.target.value;
  gNum = value;
  numRange.innerText = `Generate a number between 0 and ${value}`;
}

function paintResult(num, randomNum) {
  if (parseInt(num) === randomNum) {
    resultSpan.innerText = `You Choose: ${num}, the machine choose: ${randomNum}.\nYou won`;
  } else {
    resultSpan.innerText = `You Choose: ${num}, the machine choose: ${randomNum}.\nYou lost`;
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
