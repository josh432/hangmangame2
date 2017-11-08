var usedLetters = []; //empty array to be "pushed" to fill, will only include incorrect guesses
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); //Alphabet array
var lives = 10; //number of guesses remaining
var wordArray = ["elephant", "tapir", "ocelot", "jaguar", "python", "termite", "piranha", "anaconda", "parrot", "gorilla", "bonobo", "tiger", "leopard", "cobra", "cougar", "capybara", "macaw"]; //possible answer choices the computer can pick for Hangman
var computerWordChoice = wordArray[Math.floor(Math.random() * wordArray.length)]; //computer picks a random  word from the word bank//
var underscoreArray = []; //I have a function places an underscores in this empty array for each letter in the word the computer selected 
var wins = 0;
var losses = 0;
var keyLock = false;





document.onkeyup = function(event) {
	var userLetterChoice = event.key.toLowerCase();
	console.log(userLetterChoice);

	for (i = 0; i < computerWordChoice.length; i++) {
		if (computerWordChoice.charAt(i) === userLetterChoice) { 
            underscoreArray[i] = userLetterChoice;
			console.log(underscoreArray);
		}
	}
	
}

generatePuzzle();
console.log(computerWordChoice);
console.log(underscoreArray);




function generatePuzzle() {
    computerWordChoice = wordArray[Math.floor(Math.random() * wordArray.length)]; //computer selects a random word
    for (i = 0; i < computerWordChoice.length; i++) { //creates array of underscores so I can pull their index to match with correct letters
        underscoreArray.push("_");
    }
};










	

