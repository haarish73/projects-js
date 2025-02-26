let sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is a fun programming language.",
    "Typing fast improves productivity and efficiency.",
    "Learning to code takes time and practice."
];

let sentenceEl = document.getElementById("sentence");
let inputBox = document.getElementById("inputBox");
let startBtn = document.getElementById("startBtn");
let timerEl = document.getElementById("timer");
let wpmEl = document.getElementById("wpm");

let startTime, endTime;
let timerInterval;
let currentSentence = "";

function startGame() {
    inputBox.disabled = false;
    inputBox.value = "";
    inputBox.focus();

    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceEl.innerText = currentSentence;

    startTime = null;
    endTime = null;
    timerEl.innerText = "Time: 0s";
    wpmEl.innerText = "WPM: 0";

    clearInterval(timerInterval);
    
    inputBox.addEventListener("input", startTimer);
}

function startTimer() {
    if (!startTime) {
        startTime = new Date();
        timerInterval = setInterval(updateTimer, 1000);
    }

    if (inputBox.value === currentSentence) {
        endGame();
    }
}

function updateTimer() {
    let timePassed = Math.floor((new Date() - startTime) / 1000);
    timerEl.innerText = `Time: ${timePassed}s`;
}

function endGame() {
    clearInterval(timerInterval);
    endTime = new Date();

    let timeTaken = (endTime - startTime) / 1000; // in seconds
    let wordsTyped = currentSentence.split(" ").length;
    let wpm = Math.round((wordsTyped / timeTaken) * 60);

    wpmEl.innerText = `WPM: ${wpm}`;
    inputBox.disabled = true;
}

startBtn.addEventListener("click", startGame);