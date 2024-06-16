let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let heigestScore = level;
let buttons = ["yellow", "green", "red", "purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is Started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randInx = Math.floor(Math.random() * 3);
  let randColor = buttons[randInx];
  let randbtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  console.log(gameSeq);

  btnFlash(randbtn);
}

function checkAns(idx) {
  console.log("Level : ", level);
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (heigestScore < level) {
      heigestScore = level;
    }

    h2.innerHTML = `Game Over! Your Score Was <b>[ ${level} ]</b> <br> [Your Highest Score is : ${heigestScore} ] <br>Press Any Key To Start.`;
    reset();
  }
}

function btnPress() {
  console.log(this);
  let btn = this;
  btnFlash(btn);

  let userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
