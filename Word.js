var Letter = require("./Letter.js");

function Word(word) {

    this.letters = [];

    for (var i = 0; i < word.length; i++) {
        var letter = new Letter(word.charAt(i));
        this.letters.push(letter);
    }

    this.toString = function() {
        var str = this.letters[0].toString();

        for (var i = 1; i < this.letters.length; i++) {
            str = str + " " + this.letters[i].toString();
        }

        return str;
    }

    this.guess = function(guessedChar) {

        var count = 0;
        
        for (var i = 0; i < this.letters.length; i++) {
            var hasBeenGuessed = this.letters[i].check(guessedChar);
            if (hasBeenGuessed) {
                count++;
            }

        }

        return count;

    }

}

// var word = new Word("hello");
// console.log(word.toString());

// word.guess("h");
// word.guess("L");

// console.log(word.toString());

module.exports = Word;

