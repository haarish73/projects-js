document.addEventListener("DOMContentLoaded", () => {
    let score = 0;
    let timeLeft = 30;
    let holeTimer;
    let gameTimer;
    const scoreDisplay = document.getElementById("score");
    const timeDisplay = document.getElementById("time");
    const startButton = document.getElementById("start-btn");
    const holes = document.querySelectorAll(".hole");

    // Function to randomly select a hole and show the hole
    function showhole() {
        // Clear all holes
        holes.forEach(hole => hole.classList.remove("hole"));

        // Select a random hole
        const randomHole = holes[Math.floor(Math.random() * holes.length)];
        randomHole.classList.add("hole");

        // hole disappears after 800ms
        setTimeout(() => {
            randomHole.classList.remove("hole");
        }, 800);
    }

    // Function to handle clicks on the hole
    holes.forEach(hole => {
        hole.addEventListener("click", () => {
            if (hole.classList.contains("hole")) {
                score++;
                scoreDisplay.textContent = score;
                hole.classList.remove("hole"); // hole disappears after being hit
            }
        });
    });

    // Function to start the game
    function startGame() {
        // Reset score and time
        score = 0;
        timeLeft = 30;
        scoreDisplay.textContent = score;
        timeDisplay.textContent = timeLeft;

        // Start hole movement
        holeTimer = setInterval(showhole, 1000);

        // Start countdown timer
        gameTimer = setInterval(() => {
            timeLeft--;
            timeDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(holeTimer);
                clearInterval(gameTimer);
                alert(`Game over! Your final score is ${score}.`);
            }
        }, 1000);
    }

    // Add event listener to the start button
    startButton.addEventListener("click", startGame);
});
