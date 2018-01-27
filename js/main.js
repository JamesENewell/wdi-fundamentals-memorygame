console.log("Up and running!");
//Create an Array for cards
var cards = ["queen", "queen", "king", "king"];
//Create an Array for cardsInPlay
var cardsInPlay = [];
//Create variable cardOne
var cardOne = cards[0];
//Add first card to array
cardsInPlay.push(cardOne);
//Display user flipped card
console.log("User flipped " + cardOne);
//Create varibale cardTwo
var cardTwo = cards[2];
//Add second card to array
cardsInPlay.push(cardTwo);
//Display user flipped card
console.log("User flipped " + cardTwo);
//if statement for cardsInPlay Array length
if (cardsInPlay.length === 2) {
//check for equality between cards within cardsInPlay array and provide user feedback
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
	  alert("Sorry, try again.");
	}
}
