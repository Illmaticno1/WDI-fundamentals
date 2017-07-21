/**********************************************
ARRAYS/OBJECTS/VARIABLES
***********************************************/
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "img/queenofhearts.jpg"
	},
	{
		rank: "queen",
		suit: "daimonds",
		cardImage: "img/queenofdiamonds.jpg"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "img/kingofhearts.jpg"
	},
	{
		rank: "king",
		suit: "diamond",
		cardImage: "img/kingofdiamonds.jpg"
	}
];
var cardsInPlay = [];
var gameStarted = false;
var scores = 0;
var clicked = 0;


/************************************************
METHOD AND FUNCTIONS
************************************************/

var flipCard = function() {
	clicked +=1;
	gameStarted = true;
	var cardId = this.getAttribute("data-id");
		console.log("User flipped " + cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		cardsInPlay.push(cards[cardId].rank);
  		this.setAttribute("src", cards[cardId].cardImage);
		if(cardsInPlay.length === 2){
				checkForMatch();	
	}
};

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		scores += 1;
		document.getElementById("yourScore").innerHTML = "Your score is: ";
		document.getElementById("score").innerHTML = scores;
		alert("You found a match!");
	} else {
		alert("Sorry, try again!");
	}
};

var createBoard = function(){
	for (i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "img/back.jpg");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);

	}	

    
};
createBoard();

var resetGame = function(){
	document.getElementById("game-board").innerHTML = "";
	cardsInPlay = [];
	clicked = 0;
	createBoard();
	
};

	document.getElementById("reset").onclick = function () {
	if (gameStarted === true && clicked >= 2) {
		resetGame();
	} else {
		alert("Keep playing");
	}
};



















