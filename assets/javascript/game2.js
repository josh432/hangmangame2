var usedLetters = []; 
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
var lives = 10; 
var wordArray = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"]; 
var computerWordChoice = wordArray[Math.floor(Math.random() * wordArray.length)]; 
var underscoreArray = [];
var wins = 0;
var losses = 0;
//var keyLock = false;
generatePuzzle();


document.onkeyup = function(event) {
	var userLetterChoice = event.key.toLowerCase();
	console.log(userLetterChoice)







	for (i = 0; i < computerWordChoice.length; i++) {
		if (computerWordChoice.charAt(i) === userLetterChoice) { 
            underscoreArray[i] = userLetterChoice;
			console.log(underscoreArray);
			updateAreas();
		}
	}

		if(underscoreArray.indexOf(userLetterChoice) === -1) {
			usedLetters.push(userLetterChoice);
			lives -= 1;
			console.log(usedLetters);
			console.log(lives);
			updateAreas();
		}

		if(underscoreArray.indexOf("_") === -1) {
			alert("You Win!");
			++wins;
			console.log(wins);
		}

		if (lives == 0) {
			alert("Game Over!");
			++losses;
			console.log(losses);
		}

		
};


console.log(computerWordChoice);
console.log(underscoreArray);




function generatePuzzle() {
    computerWordChoice = wordArray[Math.floor(Math.random() * wordArray.length)]; //computer selects a random word
    for (i = 0; i < computerWordChoice.length; i++) { //creates array of underscores so I can pull their index to match with correct letters
        underscoreArray.push("_");
    }
};

 function updateStats() {
    var underscoreString = underscoreArray.join(" "); 
    document.getElementById("underScores").innerHTML = underscoreString;
    document.getElementById("usedLetters").innerHTML = "Guessed Letters: " + usedLetters.join(" ");
	document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
 };





	

