/* sophisticated_code.js */

// This code is a sophisticated implementation of a game called "Guess the Number"
// It generates a random number between 1 and 100 and asks the user to guess it.
// The user has a limited number of attempts to guess the correct number.
// The code includes error handling, input validation, and a scoring system.

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Define the number of attempts and score
let attempts = 10;
let score = 0;

// Prompt the user to enter their name
const name = prompt("Welcome to Guess the Number! Please enter your name:");

// Greet the user and explain the rules
alert(`Hi ${name}!\n\nI'm thinking of a number between 1 and 100. Can you guess it?\nYou have ${attempts} attempts to find the correct number.\nLet's begin!`);

// Start the game
while (attempts > 0) {
  // Prompt the user to enter their guess
  const guess = parseInt(prompt(`Attempts left: ${attempts}\n\nEnter your guess:`));

  // Validate the input
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Invalid input! Please enter a number between 1 and 100.");
    continue;
  }

  // Decrease the number of attempts
  attempts--;

  // Check if the guess is correct
  if (guess === randomNumber) {
    score = attempts + 1;
    break;
  } else {
    // Provide a hint based on the user's guess
    const hint = guess < randomNumber ? "higher" : "lower";
    alert(`Wrong guess! Try a ${hint} number.`);
  }
}

// Display the game result
if (score > 0) {
  alert(`Congratulations ${name}! You found the correct number ${randomNumber}.\nYour score is ${score}.`);
} else {
  alert(`Game over ${name}! You couldn't find the correct number ${randomNumber}.\nBetter luck next time.`);
}

// End of the code
