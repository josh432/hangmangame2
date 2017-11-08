var usedLetters = []; 
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
var lives = 10; 
var wordArray = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"]; 
var computerWordChoice = wordArray[Math.floor(Math.random() * wordArray.length)]; 
var underscoreArray = [];
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










	

