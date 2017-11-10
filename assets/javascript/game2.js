//Planet Hangman Game

//Global Variables:
var usedLetters = []; 
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
var lives = 10; 
var wordArray = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"]; 
var computerWordChoice = wordArray[Math.floor(Math.random() * wordArray.length)]; 
var underscoreArray = [];
var wins = 0;
var losses = 0;







//updateAreas();  
//generatePuzzle(); 
document.getElementById("message").innerHTML = "Press any key to get started.";
document.getElementById("lives").innerHTML = lives;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById('underscores').innerHTML = generatePuzzle().join(' '); 


document.onkeyup = function(event) {
	var userLetterChoice = event.key.toLowerCase();
	console.log(userLetterChoice)







	if (usedLetters.indexOf(userLetterChoice) === -1) {
		usedLetters.push(userLetterChoice);
		for (i = 0; i < computerWordChoice.length; i++) {
			if (computerWordChoice.charAt(i) === userLetterChoice) { 
				underscoreArray[i] = userLetterChoice;
				console.log(underscoreArray);
				updateAreas();

			}

		} 
	//trying to use nested if statement logic here:

		if(underscoreArray.indexOf(userLetterChoice) === -1) {
			lives -= 1;
			console.log(usedLetters);
			console.log(lives);
			updateAreas(); 
		}

		if (underscoreArray.indexOf("_") === -1) {
			++wins;
			console.log(wins);
			updateAreas();
			document.getElementById("message").innerHTML = "You Win!";
			resetGame();
		}
			

		if (lives == 0) {
			++losses;
			console.log(losses);
			updateAreas();
			document.getElementById("message").innerHTML = "You Lose!";
			resetGame();
		} 

			else if (alphabet.indexOf(userLetterChoice) === -1) {
			document.getElementById("message").innerHTML = "Please Enter a Letter.";
		}

	}	
}; 


  //Duplicate letter bug. Need this line of code to complete game logic, but the console rejects it (else and else/if):
  //else if (else???) (usedLetters.indexOf(userLetterChoice) != -1 || underscoreArray.indexOf(userLetterChoice) != -1) { 
   //    alert("You've already used that letter");
  


console.log(underscoreArray);



function generatePuzzle() {
	computerWordChoice = wordArray[Math.floor(Math.random() * wordArray.length)]; //computer selects a random word
	console.log(computerWordChoice);
    for (i = 0; i < computerWordChoice.length; i++) { //creates array of underscores so I can pull their index to match with correct letters
        underscoreArray.push("_");
    }
    return underscoreArray; 
};

 function updateAreas() {
 	underscoreString = underscoreArray.join(" ");
   	document.getElementById("underscores").innerHTML = underscoreString;
   	document.getElementById("usedLetters").innerHTML = usedLetters.join(" ");
	document.getElementById("wins").innerHTML = wins;
   	document.getElementById("losses").innerHTML = losses;
  	document.getElementById("lives").innerHTML = lives;
};


function resetGame() {
   usedLetters = [];
   underscoreArray = [];
   underscoreString = "";
   lives = 10;
   generatePuzzle();
   updateAreas();

};

function message() {
	document.getElementById("message").innerHTML = "Press any key to continue."
}
//this is for the continue button at the bottom. this will simply message user to continue without disturbing the wins/losses area.