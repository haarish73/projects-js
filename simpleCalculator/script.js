let results= document.getElementById("result").innerText = `Result: ${result}`;
function calculate(){
    let num1 = parseFloat(prompt("Enter first number")); 
    let num2 = parseFloat(prompt("Enter first number")); 
    let operation = prompt("Enter the operation (+, -, *, /):");
   


if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error: Cannot divide by zero!";
    }
} else {
    result = "Invalid operation!";
}
alert(`Result: ${result}`);
}
