//game.js first attempt
//Create word array
var words = [
"lion",
"tiger",
"bear",
"hyena",
"gorilla",
"leopard", 
"zebra", 
"elephant", 
"vulture", 
"wildebeest", 
"camel", 
"porcupine", 
"meerkat", 
"monkey", 
"giraffe"];

//Choose a random word 

var randomNumber = Math.floor(Math.random() * words.length);
var chosenWord = words[randomNumber];
var underScore = [];
var correctWord = [];
var wrongWord = [];
var guessesLeft = 20;
var wins = 0;
var losses = 0;
console.log(chosenWord);

var underScoreArea = document.getElementById('wordToGuess');
var wrongGuessArea = document.getElementById('letterGuessedWrong');

//Create '_' based on word length


underScoreArea.innerHTML = createDash().join(' ');
numGuesses.innerHTML = guessesLeft;

//console.log(createDash());

//Get User Guess

document.onkeyup = function(event) {
	console.log(event);
	var userGuess = event.key.toLowerCase();
	console.log(chosenWord.indexOf(userGuess));

	//if user guesses correctly, check to see if letter in generated word
	if (chosenWord.indexOf(userGuess) > -1) { //this line may need work, tricky code//
	console.log(true);

	//If letter is present, push to word to correct guess area and reduce guesses left.
	correctWord.push(userGuess);
	console.log(correctWord);
	//guessesLeft--;
	document.getElementById('numGuesses').innerHTML = guessesLeft;

	//replaces dash with correct letter
	underScore[chosenWord.indexOf(userGuess)] = userGuess;
	underScoreArea.innerHTML = underScore.join(' ');
	//console.log(underScore);

	//if letters/underscores match computer's word, user wins game, update win area.
	if (underScore.join('') == chosenWord) {
		alert('You Won!');
		++wins;
		document.getElementById('gamesWon').innerHTML = wins;

	};
	//else, if there are no more guesses left, user loses game, update loss area.
	} else if (guessesLeft <= 1) {
		alert('You lose!');
		++losses;
		document.getElementById('gamesLost').innerHTML = losses;
	};

	//If letter isn't present, push letter to letters guessed area & reduce guesses left.
	wrongWord.push(userGuess);
	wrongGuessArea.innerHTML = wrongWord;
	console.log(wrongWord);
	guessesLeft--;
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	};




//underScoreArea.innerHTML = "text";


function createDash() {
	for (var i = 0; i < chosenWord.length; i++){
		underScore.push('_');

	};
	return underScore;
};

function resetGame() {
	randomNumber = Math.floor(Math.random() * words.length);
	chosenWord = words[randomNumber];
	underScoreArea.innerHTML = createDash().join(' ');
	guessesLeft = 20;
}









