//Old code from previous
/*
console.log("Up and running!");

//Creating the vars for the cards

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "King";
var cardFour = "King";

console.log("User flipped " + cardThree);
*/

var cards;
var cardsInPlay;
var cardOne;
var cardTwo;
var cardThree;
var cardFour;

cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
cardOne = cards[0];
cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log(cardsInPlay);

if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!");}
else {alert("Sorry try again");
};
}
