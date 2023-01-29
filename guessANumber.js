// Read Player's Move.
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Method random. Computer choose a random number between "1 and 100".
let computerGuess = Math.floor(Math.random() * 100);

// Function that stores the question about the number.
let recursiveAsyncReadLine = function () {
    readline.question("Guess the number (0-100): ", guess =>
    {
        if (guess <= 100 && guess >= 0) {
            if (guess == computerGuess) {
                console.log("You guess it!");
                return readline.close();
            } else if (guess < computerGuess) {
                console.log("Too Low!");
                recursiveAsyncReadLine();
            } else if (guess > computerGuess) {
                console.log("Too High!");
                recursiveAsyncReadLine();
            } else {
                console.log("Invalid input! Try again...");
                recursiveAsyncReadLine();
            }
        }
    });
}
recursiveAsyncReadLine();

// node Guess-A-Number/guessANumber.js