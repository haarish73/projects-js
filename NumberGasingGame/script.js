let randomNumber = Math.floor(Math.random() * 10) + 1


function playGame(){
    let playerGuess = prompt("Guess the number b/w 1 and 10")
    if (playerGuess == randomNumber) {
        alert("Congratulations! You guessed it right.");
    } else {
        alert("Oops! The correct number was " + randomNumber);
    }

}