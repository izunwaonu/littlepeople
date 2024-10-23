// Sound files
let evenSound = new Audio('even.mp3');   // Sound for even numbers
let oddSound = new Audio('odd.mp3');     // Sound for odd numbers
let correctSound = new Audio('correct.mp3');  // Sound for correct answers
let wrongSound = new Audio('wrong.mp3');      // Sound for wrong answers
let byeByeSound = new Audio('byeBye.mp3');    // "Bye Bye" sound

// Function to play the sound for Even blocks
function playEvenSound() {
    evenSound.play();   // Play the "Even" sound
}

// Function to play the sound for Odd blocks
function playOddSound() {
    oddSound.play();    // Play the "Odd" sound
}

// Section 4 Game: Generate random number and display it
let currentNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
let score = 0; // Initialize score

// Function to get a random number
function getRandomNumber() {
    currentNumber = Math.floor(Math.random() * 10) + 1; // Generate a new random number
    document.getElementById('number-display').innerText = currentNumber; // Display the number
    return currentNumber; // Return the current number
}

// Function to check if the number is odd or even
function checkOddEven(choice) {
    console.log("Button clicked:", choice); // Debugging log
    const feedback = document.getElementById('feedback'); // Get feedback element
    const scoreElement = document.getElementById('score'); // Get score element
    
    // Check if the player's choice matches the number's type (odd/even)
    if ((currentNumber % 2 === 0 && choice === 'even') || (currentNumber % 2 !== 0 && choice === 'odd')) {
        // Correct answer
        feedback.innerHTML = "Correct!"; // Set feedback message
        feedback.classList.remove('wrong'); // Remove wrong class
        feedback.classList.add('correct'); // Add correct class
        correctSound.play(); // Play congratulatory sound
        score++; // Increment score
        scoreElement.innerText = score; // Update score display
        
        // Reset feedback after a short delay
        setTimeout(() => {
            feedback.innerHTML = ""; // Clear feedback
            getRandomNumber(); // Get a new random number
        }, 1000);
    } else {
        // Incorrect answer
        feedback.innerHTML = "Oops! Bye Bye!"; // Set feedback message
        feedback.classList.remove('correct'); // Remove correct class
        feedback.classList.add('wrong'); // Add wrong class
        wrongSound.play(); // Play wrong answer sound
        byeByeSound.play(); // Play "Bye Bye" sound
        score = 0; // Reset score
        scoreElement.innerText = score; // Update score display
        
        // Reset feedback after a short delay
        setTimeout(() => {
            feedback.innerHTML = ""; // Clear feedback
            getRandomNumber(); // Get a new random number
        }, 1000);
    }
}

// Initialize the game on page load
getRandomNumber(); // Get the first random number
