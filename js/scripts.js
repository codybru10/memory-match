// Back End Logic

function Board(){
  this.oneArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
}

var cardSpot;
var firstCard;
var secondCard;
var matchArray = [];

Board.prototype.arrayMatcher = function(cardSpot) {
  debugger;
  if (firstCard === cardSpot - 8 || cardSpot + 8 === firstCard) {
    secondCard = theBoard.oneArray.indexOf(theBoard.oneArray[cardSpot]);
    showImage2(firstCard,secondCard);
    matchArray.push("match");
    matchArray.push("match");
    if (matchArray.length === this.oneArray.length) {
      $(".winner").show();
    }
    firstCard = undefined;
    secondCard = undefined;
    theBoard = new Board;
  } else if (firstCard !== cardSpot && cardSpot !== undefined && firstCard !== undefined) {
    secondCard = theBoard.oneArray.indexOf(theBoard.oneArray[cardSpot]);
    pictureTimer();
  } else {
    showImage(cardSpot);
    firstCard = theBoard.oneArray.indexOf(theBoard.oneArray[cardSpot]);
  }
}



var pictureTimer = function() {
  showImage(secondCard);
  setTimeout(function() {
  cardBack2(firstCard,secondCard); }, 1500);
  theBoard = new Board;

}

var showImage = function(cardSpot) {
    if (cardSpot > 7)  {
    $(".board").find("." + cardSpot).html("");
    $(".board").find("." + cardSpot).html("<h1><img class='img-responsive' src='pac12/" + (cardSpot - 8) + ".jpg'></h1>"); // Inserts image in proper grid square by ID
  } else if (cardSpot <= 7) {
    $(".board").find("." + cardSpot).html("");
    $(".board").find("." + cardSpot).html("<h1><img class='img-responsive' src='pac12/" + cardSpot + ".jpg'></h1>"); // Inserts image in proper grid square by ID
  };
  }

var showImage2 = function(firstCard, secondCard) {
  if (firstCard < 8){
   $(".board").find("." + firstCard).html("");
   $(".board").find("." + firstCard).html("<h1><img class='img-responsive' src='pac12/" + firstCard + ".jpg'></h1>"); // Inserts image in proper grid square by ID
   $(".board").find("." + secondCard).html("");
   $(".board").find("." + secondCard).html("<h1><img class='img-responsive' src='pac12/" + firstCard + ".jpg'></h1>"); // Inserts image in proper grid square by ID
 } else if (firstCard > 7) {
   $(".board").find("." + firstCard).html("");
   $(".board").find("." + firstCard).html("<h1><img class='img-responsive' src='pac12/" + secondCard + ".jpg'></h1>"); // Inserts image in proper grid square by ID
   $(".board").find("." + secondCard).html("");
   $(".board").find("." + secondCard).html("<h1><img class='img-responsive' src='pac12/" + secondCard + ".jpg'></h1>"); // Inserts image in proper grid square by ID

 }
 };

 var cardBack = function(cardSpot) {
  $("." + boardSection).find("." + cardSpot).html("");
  $("." + boardSection).find("." + cardSpot).html("<h1><img class=class='img-responsive' src='pac12/cover.jpg'></h1>"); //inserts question image
}

 var cardBack2 = function(cardSpot1,cardSpot2) {
  $(".board").find("." + cardSpot1).html("");
  $(".board").find("." + cardSpot1).html("<h1><img class=class='img-responsive' src='pac12/cover.jpg'></h1>"); //inserts question image
  $(".board").find("." + cardSpot2).html("");
  $(".board").find("." + cardSpot2).html("<h1><img class=class='img-responsive' src='pac12/cover.jpg'></h1>"); //inserts question image
  cardSpot1 = undefined;
  cardSpot2 = undefined;
  firstCard = undefined;
  secondCard = undefined;
}
// Front End Logic

$(document).ready(function(){
  $("#startGame").click(function() {
    theBoard = new Board;
    });

    $(".grid").click(function() {
      debugger;
      cardSpot = parseInt($(this).attr("class")); // grabs id and converts to number
      theBoard.arrayMatcher(cardSpot);
    });

  });
