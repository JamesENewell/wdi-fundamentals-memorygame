// Create Array for Card Objects
var cards = [
  { 
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

// Create Array for cards in play
var cardsInPlay = [];

// Create Function to see if cards match
var checkForMatch = function () {

// Return feedback to user
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
};

// Create function for flipping a card 
var flipCard = function () {
  // Find cardId and log it
  cardId = this.getAttribute('data-id');
  console.log(cardId);
  
  // Add card to cardsInPlay array
  cardsInPlay.push(cards[cardId].card);

  this.setAttribute('src', cards[cardId].cardImage);

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // Check if they match
    checkForMatch();

    cardsInPlay = [];
  }
};
// Function to create board
var createBoard = function () {
// Loop through cards to create elements 
for (var i = 0; i < cards.length; i++) {

var cardElement = document.createElement('img');
  // display back of card image 
  cardElement.setAttribute('src', 'images/back.png');

  cardElement.setAttribute('data-id', i);

  cardElement.addEventListener('click', flipCard);

  document.getElementById('game-board').appendChild(cardElement);

  }

}

createBoard();