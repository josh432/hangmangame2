var usedLetters = []; 
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
var lives = 10; 
var wordArray = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"]; 
var computerWordChoice = wordArray[Math.floor(Math.random() * wordArray.length)]; 
var underscoreArray = [];
var wins = 0;
var losses = 0;
//updateAreas(); cannot get this function to work properly.
//generatePuzzle(); this works but doesn't render to HTML
document.getElementById('underscores').innerHTML = generatePuzzle().join(' '); //this was added from version one, doesn't fill(!).
//cannot get the letters to render in HTML. Only the console version works.
document.onkeyup = function(event) {
	var userLetterChoice = event.key.toLowerCase();
	console.log(userLetterChoice)








	for (i = 0; i < computerWordChoice.length; i++) {
		if (computerWordChoice.charAt(i) === userLetterChoice) { 
            underscoreArray[i] = userLetterChoice;
			console.log(underscoreArray);
			//updateAreas(); want this function to work!!
		}

	}

		if(underscoreArray.indexOf(userLetterChoice) === -1) {
			usedLetters.push(userLetterChoice);
			lives -= 1;
			console.log(usedLetters);
			console.log(lives);
			//updateAreas(); want this function to work!!
		}

		if(underscoreArray.indexOf("_") === -1) {
			alert("You Win!");
			++wins;
			console.log(wins);
			document.getElementById("wins").innerHTML = wins; //this is the only html area which works!
		}

		if (lives == 0) {
			alert("Game Over!");
			++losses;
			console.log(losses);
			document.getElementById("losses").innerHTML = losses;//this is the only html area which works!
		}

		
}; //need to format 2 else if statements. 1) if input is not a letter, alert user to enter a letter and 2) if letter
  //has been input twice, alert user to pick a different letter. 

  //else if the above to else statements are false, the game commences. Not sure how to format these.


console.log(computerWordChoice);
console.log(underscoreArray);



function generatePuzzle() {
    computerWordChoice = wordArray[Math.floor(Math.random() * wordArray.length)]; //computer selects a random word
    for (i = 0; i < computerWordChoice.length; i++) { //creates array of underscores so I can pull their index to match with correct letters
        underscoreArray.push("_");
    }
    return underscoreArray; //this was added to generate underscores, shouldn't need this if updateArea() was working!
};

 //function updateAreas() {
 //	var underscoreString = underscoreArray.join(" ");
  //  document.getElementById("underScores").innerHTML = underscoreString;
  //  document.getElementById("usedLetters").innerHTML = "Guessed Letters: " + usedLetters.join(" ");
	//document.getElementById("wins").innerHTML = wins;
   // document.getElementById("losses").innerHTML = losses;
  // document.getElementById("lives").innerHTML = "Guesses Remaining: " + lives;
//};


//function resetGame() {
//    usedLetters = [];
//    underscoreArray = [];
//    underscoreString = "";
//    keyLock = false; //unlocks keyboard
//    lives = 10;
//    generatePuzzle();
//    updateStats();
//this is for the reset button at the bottom. this will reset the page without disturbing the wins/losses area.

	

