
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
  if (boardsection === 2) {
    theBoard.gridCoords1[currentCard] = "clicked";
    return "board 2"
  } else if (boardsection === 3) {
    theBoard.gridCoords2[currentCard] = "clicked";
    return "board 3"
  }
}

Board.prototype.cardStateChanger = function(currentCard) {

  var boardsection = theBoard.boardCheck(boardSection, currentCard);

  if (boardsection === "board 2") {
    theBoard.gridCoords1[currentCard] = "clicked";
  } else if (boardsection === "board 3") {
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
     var showImage = function(cardSpot) {
        $("." + cardSpot).html("");
        $("." + cardSpot).html("<h1><img class=' img-responsive' src='img/" + cardSpot + ".jpg'></h1>"); // Inserts image in proper grid square by ID
      };

    showImage(cardSpot);
    } else {
      var cardBack = function(cardSpot) {
      $("." + cardSpot).html("");
      $("." + cardSpot).html("<h1><img src='img/question.jpg'></h1>");//inserts question image after x seconds
         setTimeout(function(){
      cardBack(cardSpot);
     }, 500);
    }

  }

}





$(document).ready(function(){

  $("#startGame").click(function() {

    theBoard = new Board;

  });

  $(".grid").click(function() {
    debugger;
    cardSpot = parseInt($(this).attr("class")); // grabs id and converts to number
    boardSection = parseInt($(this).parent().attr("class"));

    theBoard.cardStateChanger(cardSpot);

    theBoard.matchFinder();



  });

});
