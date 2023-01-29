// Read Player's Move.
const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Method random. Computer choose a random number between "1 and 100".
let computerGuess = Math.floor(Math.random() * 100);

// Function that stores the question about the number.
let recursiveAsyncReadLine = function () {
    readLine.question("Guess the number (0-100): ", number =>
    {

    });
}
recursiveAsyncReadLine();