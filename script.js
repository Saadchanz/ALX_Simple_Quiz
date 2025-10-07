// Define the function to check the user's answer
function checkAnswer() {
    // Step 1: Identify the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the user's selected answer
    const userChoice = document.querySelector('input[name="quiz"]:checked');
    
    // Check if user selected an answer
    if (!userChoice) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = userChoice.value;

    // Step 3: Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 4: Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
