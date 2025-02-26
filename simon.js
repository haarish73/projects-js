let h2 = document.querySelector("h2");
let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 150);
}

// user flash
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 150);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomNumber = Math.floor(Math.random() * 4);
    let ranColor = btns[randomNumber];
    let randomBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    btnFlash(randomBtn);
}

function checkAns() {
    let idx = userSeq.length - 1; // Correct index for checking only the latest input

    if (userSeq[idx] === gameSeq[idx]) {
        console.log("same value");

        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b></br>${level}<b></b> Press any key to start`;
        reset();
    }
}

function buttonpresse() {
    console.log("Button press");
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns();
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", buttonpresse);
}
function reset(){
    started = false;
    userSeq = [];
    gameSeq = [] ;
    level = 0;
}