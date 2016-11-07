
function Board(){
  this.gridCoords1 = [0, 1, 2, 3, 4, 5, 6, 7],
  this.gridCoords2 = [0, 1, 2, 3, 4, 5, 6, 7]
}

var indexOfgridCoords1;
var indexOfgridCoords2;
var theBoard;
var cardSpot;
var boardSection;

// Board.prototype.cardState = function(currentCard) {
//
//   for (i = 0; i < theBoard.gridCoords.length; i++) {
//
//   if (theBoard.gridCoords[i] === "clicked") {
//     // this code executes when it find a clicked grid
//       console.log(theBoard.gridCoords.indexOf(theBoard.gridCoords[i]));
//       theBoard.gridCoords[i] = i;
//     }
//
//   }
// }

Board.prototype.boardCheck = function(boardsection, currentCard) {

  if (boardsection === 98) {
    return "board 98";
  } else if (boardsection === 99) {
    return "board 99";
  }
}

Board.prototype.cardStateChanger = function(currentCard, boardsection) {

  if (boardsection === "board 98") {
    theBoard.gridCoords1[currentCard] = "clicked";
  } else if (boardsection === "board 99") {
    theBoard.gridCoords2[currentCard] = "clicked";
  }

}

Board.prototype.matchFinder = function() {

  for (i = 0; i < theBoard.gridCoords1.length; i++) {

    if (theBoard.gridCoords1[i] === "clicked") {
       indexOfgridCoords1 = theBoard.gridCoords1.indexOf(theBoard.gridCoords1[i]);
    }
  }

   for (i = 0; i < theBoard.gridCoords2.length; i++) {

    if (theBoard.gridCoords2[i] === "clicked") {
       indexOfgridCoords2 = theBoard.gridCoords2.indexOf(theBoard.gridCoords2[i]);
    }
   }

    if (indexOfgridCoords1 === indexOfgridCoords2) {

      showImage(cardSpot);
    } else {
      setTimeout(function(){
   cardBack(cardSpot);
  }, 500);
  }

}

var showImage = function(cardSpot) {
   $("." + boardSection).find("." + cardSpot).html("");
   $("." + boardSection).find("." + cardSpot).html("<h1><img class='img-responsive' src='img/" + cardSpot + ".jpg'></h1>"); // Inserts image in proper grid square by ID
 };

 var cardBack = function(cardSpot) {
  $("." + boardSection).find("." + cardSpot).html("");
  $("." + boardSection).find("." + cardSpot).html("<h1><img class=class='img-responsive' src='img/question.jpg'></h1>"); //inserts question image

}



$(document).ready(function(){

  $("#startGame").click(function() {

    theBoard = new Board;

  });

  $(".grid").click(function() {
    cardSpot = parseInt($(this).attr("class")); // grabs id and converts to number
    boardSection = parseInt($(this).parent().attr("class"));
    showImage(cardSpot);
    theBoard.cardStateChanger(cardSpot, boardSection);

    // theBoard.matchFinder();



  });

});
