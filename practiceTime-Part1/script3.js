//when the user click the purchase button, render out
//"something went wrong , please try again" in paragraph
//that has id="error".

let errorPar = document.getElementById("error")
console.log(errorPar)
function purchase(){
    console.log("Button Clicked !")
    errorPar.innerText = "something went wrong , please try again"
}