let num1El = 4
let num2El = 5

 document.getElementById("num1-el").textContent = num1El
 document.getElementById("num2-el").textContent = num2El

 let sumEl = document.getElementById("sum-el")



function add(){
    sumEl.textContent = num1El + num2El
}
function sub(){
    sumEl.textContent = num1El - num2El
}
function mul(){
    sumEl.textContent = num1El * num2El
}
function div(){
    sumEl.textContent = num1El / num2El
}