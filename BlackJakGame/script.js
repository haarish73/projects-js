//1. create two variables, firstCard and secondCard.
// set their values to a random number b/w 2-11
let firstCard = 10
let secondCard = 11

//2. Create a variable, sum and set it to the sum of the two cards

let sum = firstCard + secondCard + 4
let hasBlackJak = false

let isAlive = true
let message = ""
function startGame(){
    if(sum <= 21){
        message="Do u want to draw a new card ?😁"
    }
    else if(sum === 21){
         message="Wohoo! you got black jack 🐍 "
        hasBlackJak = true
    }
    else{
        message="You are Out of Game ! 🤣"
        isAlive = false
    }
    console.log(message)
}

startGame()


