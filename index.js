var Word = require("./Word.js");
var inquirer = require("inquirer");

var possibleWords = [
    "DOCTOR",
    "MASTER",
    "DALEK",
    "TARDIS",
    "CYBERMAN",
    "SONTARAN",
    "GALLIFREY",
    "ZYGON",
    "COMPANION",
    "TORCHWOOD",
    "EXTERMINATE",
    "FANTASTIC",
    "GERONIMO",
    "NARDOLE",
    "SLITHEEN"
]

var remainingGuesses = 10;
var lettersGuessed = 0;
var randomWord;
var word;



// Game starts, initializes the first word, displays the word, prompts user

// User guesses a letter 
// app checks if letter matches
// if it matched some but not all, say "correct" and prompt user again
// if it matched all, say "user wins" and restart

// if it matched none and user has guesses remaining, say "incorrect", display guesses remaining
// if it matched none and user has no guesses remaining

function gameStart() {
    remainingGuesses = 10;
    lettersGuessed = 0;

    randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    word = new Word(randomWord);

    play();
}

function play() {
    console.log(word.toString());

    inquirer.prompt([
        {
            type: "input",
            name: "letter",
            message: "Guess a letter!"
        }
    ]).then(function(res) {
        
        var guessedTemp = word.guess(res.letter);

        if (guessedTemp > lettersGuessed) {
            lettersGuessed = guessedTemp;
            console.log("\n\nCorrect!!!\n");
        } else {
            remainingGuesses--;
            console.log("\n\nIncorrect!");
            console.log("Remaining Guesses: " + remainingGuesses + "\n")
        }

        if (lettersGuessed === word.letters.length) {
            console.log(word.toString());
            console.log("You Win!");
            console.log("Starting Over...");
            console.log("");
            console.log("");
            gameStart();
        } else if (remainingGuesses === 0) {
            console.log("You Lost! :(");
            console.log("The word was " + randomWord);
            console.log("Starting Over...");
            console.log("");
            console.log("");
            gameStart();
        } else {
            play();
        }
    });
}

gameStart();

































// console.log(word);






