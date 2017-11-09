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
document.getElementById("message").innerHTML = "Press any key to get started";// this html code works! but want this in a function.
document.getElementById("lives").innerHTML = lives;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
//document.getElementById("usedLetters").innerHTML = usedLetters <- this doesn't work
document.getElementById('underscores').innerHTML = generatePuzzle().join(' '); //this was added from version one, doesn't fill(!).
//cannot get the letters to render in HTML. Only the console version works.


document.onkeyup = function(event) {
	var userLetterChoice = event.key.toLowerCase();
	console.log(userLetterChoice)







	if (usedLetters.indexOf(userLetterChoice) === -1) {
		usedLetters.push(userLetterChoice);
		for (i = 0; i < computerWordChoice.length; i++) {
			if (computerWordChoice.charAt(i) === userLetterChoice) { 
				underscoreArray[i] = userLetterChoice;
				console.log(underscoreArray);
				updateAreas(); //want this function to work!!
			}

		} 
	//trying to use nested if statement logic here:

		if(underscoreArray.indexOf(userLetterChoice) === -1) {
			lives -= 1;
			console.log(usedLetters);
			console.log(lives);
			updateAreas(); //want this function to work!! 
			//document.getElementById("lives").innerHTML = lives; // this seems to be counting down ok.
		}

		if (underscoreArray.indexOf("_") === -1) {
			++wins;
			console.log(wins);
			updateAreas();
			//document.getElementById("wins").innerHTML = wins; //this is the only html area which works!
			alert("You Win!");
		}

		if (lives == 0) {
			++losses;
			console.log(losses);
			updateAreas();
			//document.getElementById("losses").innerHTML = losses;//this is the only html area which works!
			alert("Game Over!");
		}

	}	
}; //need to format 2 else if statements. 1) if input is not a letter, alert user to enter a letter and 2) if letter
  //has been input twice, alert user to pick a different letter. 

  //else if the above to else statements are false, the game commences. Not sure how to format these.


console.log(underscoreArray);



function generatePuzzle() {
	computerWordChoice = wordArray[Math.floor(Math.random() * wordArray.length)]; //computer selects a random word
	console.log(computerWordChoice);
    for (i = 0; i < computerWordChoice.length; i++) { //creates array of underscores so I can pull their index to match with correct letters
        underscoreArray.push("_");
    }
    return underscoreArray; //this was added to generate underscores, shouldn't need this if updateArea() was working!
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
}
//this is for the reset button at the bottom. this will reset the page without disturbing the wins/losses area.