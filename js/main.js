// Array for Cards
var cards = ['queen', 'queen', 'king', 'king'];

// Array to store cards in play
var cardsInPlay = [];

// Variable cardOne for the first card the user flipped
var cardOne = cards[0];
// Add card to array of cards in play
cardsInPlay.push(cardOne);
// Console.log() to show the card that the user flipped
console.log("User flipped " + cardOne);

// Variable cardTwo to represent the second card the user flipped
var cardTwo = cards[2];
// Add card to array of cards that are in play
cardsInPlay.push(cardTwo);
// Console.log() to show the card that the user flipped
console.log("User flipped " + cardTwo);


// Check to see if two cards have been played
if (cardsInPlay.length === 2) {

  // Check to see if two cards match and tell the feedback to user
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

