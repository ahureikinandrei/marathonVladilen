const startBtn = document.querySelector(".start");
const timeList = document.getElementById("time-list");
const timeEl = document.getElementById("time");
const board = document.getElementById("board");
const screens = document.querySelectorAll(".screen");
let time = 0;
let score = 0;
let timerID = null;

startBtn.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    screens[0].classList.add("up");
  },
  { passive: false }
);

timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    time = parseInt(e.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (e) => {
  if (e.target.classList.contains) {
    score++;
    e.target.remove();
    createRadomCircle();
  }
});

function startGame() {
  timerID = setInterval(decreaseTime, 1000);
  console.log(timerID);
  createRadomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(val) {
  timeEl.innerHTML = `00:${val}`;
}

function finishGame() {
  clearInterval(intervalID);

  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`;
}

function createRadomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = getRandomColor();

  circle.classList.add("circle");
  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  return (
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
  );
}
