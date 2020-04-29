// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const range = document.querySelector("#js-range"),
  numRange = document.querySelector("#js-numRange"),
  input = document.querySelector("#js-input"),
  playBtn = document.querySelector("#js-playBtn"),
  resultSpan1 = document.querySelector("#js-resultSpan1"),
  resultSpan2 = document.querySelector("#js-resultSpan2"),
  resultSpan3 = document.querySelector("#js-resultSpan3");
let gNum = 100;

function handleRange(event) {
  const value = event.target.value;
  gNum = value;
  numRange.innerText = `0에서 ${value} 사이의 수를 생성합니다.`;
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
