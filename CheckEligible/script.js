// Function to check voting eligibility
function number() {
    // Select the <h2> element
    const ageCheck = document.getElementById("numbers");

    // Get the user's input
    const age = prompt("Enter your age:");

    // Convert the input to a number
    const ageNum = Number(age);

    // Check if the input is valid
    if (isNaN(ageNum) || ageNum <= 0) {
        ageCheck.innerText = "Please enter a valid age.";
        return;
    }

    // Check eligibility for voting
    if (ageNum >= 18) {
        ageCheck.innerText = "You are eligible to vote.";
    } else {
        ageCheck.innerText = "You are not eligible to vote.";
    }
}
