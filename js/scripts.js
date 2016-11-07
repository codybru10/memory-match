
function Board(){
  this.gridCoords1 = [0, 1, 2, 3, 4, 5, 6, 7],
  this.gridCoords2 = [0, 1, 2, 3, 4, 5, 6, 7]
}
var indexOfgridCoords1;
var indexOfgridCoords2;


 var matchFinder = function() {
   for (i = 0; i < boardGame.gridCoords1.length; i++) {

     if (boardGame.gridCoords1[i] === "clicked") {
        indexOfgridCoords1 = boardGame.gridCoords1.indexOf(boardGame.gridCoords1[i]);
     }
   }

    for (i = 0; i < boardGame.gridCoords2.length; i++) {

     if (boardGame.gridCoords2[i] === "clicked") {
        indexOfgridCoords2 = boardGame.gridCoords2.indexOf(boardGame.gridCoords2[i]);
     }
    }

   console.log(indexOfgridCoords1 + " " + indexOfgridCoords2);

 }

Board.prototype.cardState = function(currentCard) {

  for (i = 0; i < theBoard.gridCoords.length; i++) {

  if (theBoard.gridCoords[i] === "clicked") {
    // this code executes when it find a clicked grid
      console.log(theBoard.gridCoords.indexOf(theBoard.gridCoords[i]));
      theBoard.gridCoords[i] = i;
    }

  }
}

Board.prototype.cardStateChanger = function(currentCard) {
  theBoard.gridCoords[currentCard] = "clicked";
}

Board.prototype.matchFinder = function() {
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



var theBoard;
var cardSpot;


$(document).ready(function(){

  $("#startGame").click(function() {

    theBoard = new Board;

  });

  $(".grid").click(function() {
    cardSpot = parseInt($(this).attr("class")); // grabs id and converts to number
    theBoard.cardStateChanger(cardSpot);


    var showImage = function(cardSpot) {
      $("." + cardSpot).html("");
      $("." + cardSpot).html("<h1><img class=' img-responsive' src='img/" + cardSpot + ".jpg'></h1>"); // Inserts image in proper grid square by ID
    };

  showImage(cardSpot);

  var cardBack = function(cardSpot) {
    $("." + cardSpot).html("");
    $("." + cardSpot).html("<h1><img src='img/question.jpg'></h1>");//inserts question image after x seconds
  }

  setTimeout(function(){
    cardBack(cardSpot);
   }, 500);



  });

});
