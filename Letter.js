function Letter(char) {

    this.char = char.toUpperCase();
    this.hasBeenGuessed = false;
    
    this.toString = function() {
        if (!this.hasBeenGuessed) {
            return "_";
        } else {
            return this.char;
        }
    }

    this.check = function(guessedChar) {
        if (guessedChar.toUpperCase() === this.char) {
            this.hasBeenGuessed = true;
        }
        return this.hasBeenGuessed;
    }

}

// var letter = new Letter("g");
// console.log(letter);

module.exports = Letter;
