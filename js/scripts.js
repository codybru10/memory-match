
function Board(){
  this.gridCoords1 = [0, 1, 2, 3, 4, 5, 6, 7],
  this.gridCoords2 = [0, 1, 2, 3, 4, 5, 6, 7]
}


var theBoard;
var cardSpot;
var boardSection;
var indexOfgridCoords1;
var indexOfgridCoords2;

var boardCheck = function(boardsection) {

  if (boardsection === 98) {
    return "board 98";
  } else if (boardsection === 99) {
    return "board 99";
  }
}

Board.prototype.cardStateChanger = function(currentCard, boardsection) {

   var boardsection = boardCheck(boardSection);

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
       theBoard.gridCoords1[i] = i;
    }
  }

   for (i = 0; i < theBoard.gridCoords2.length; i++) {

    if (theBoard.gridCoords2[i] === "clicked") {
       indexOfgridCoords2 = theBoard.gridCoords2.indexOf(theBoard.gridCoords2[i]);
       theBoard.gridCoords2[i] = i;
    }
   }

   if (indexOfgridCoords1 === indexOfgridCoords2) {
     theBoard.gridCoords1[indexOfgridCoords1] = "matched";
     theBoard.gridCoords2[indexOfgridCoords2] = "matched";
     showImage2(indexOfgridCoords1,indexOfgridCoords2);
     indexOfgridCoords1 = undefined;
     indexOfgridCoords2 = undefined;
   } else if (indexOfgridCoords1 !== indexOfgridCoords2 && indexOfgridCoords2 !== undefined && indexOfgridCoords1 !== undefined) {
      pictureTimer();
   } else {
     showImage(cardSpot);
   }
}

var pictureTimer = function() {

  showImage(indexOfgridCoords2);
  setTimeout(function() {
  cardBack2(indexOfgridCoords1, indexOfgridCoords2); }, 1500);
  theBoard = new Board;
}

var showImage = function(cardSpot) {

   $("." + boardSection).find("." + cardSpot).html("");
   $("." + boardSection).find("." + cardSpot).html("<h1><img class='img-responsive' src='pac12/" + cardSpot + ".jpg'></h1>"); // Inserts image in proper grid square by ID
 };

var showImage2 = function(indexOfgridCoords1,indexOfgridCoords2) {
   $("." + boardSection).find("." + indexOfgridCoords1).html("");
   $("." + boardSection).find("." + indexOfgridCoords1).html("<h1><img class='img-responsive' src='pac12/" + cardSpot + ".jpg'></h1>"); // Inserts image in proper grid square by ID
   $("." + boardSection).find("." + indexOfgridCoords2).html("");
   $("." + boardSection).find("." + indexOfgridCoords2).html("<h1><img class='img-responsive' src='pac12/" + cardSpot + ".jpg'></h1>"); // Inserts image in proper grid square by ID
 };

 var cardBack = function(cardSpot) {
  $("." + boardSection).find("." + cardSpot).html("");
  $("." + boardSection).find("." + cardSpot).html("<h1><img class=class='img-responsive' src='pac12/cover.jpg'></h1>"); //inserts question image

}

 var cardBack2 = function(cardSpot1,cardSpot2) {

  $(".98").find("." + cardSpot1).html("");
  $(".98").find("." + cardSpot1).html("<h1><img class=class='img-responsive' src='pac12/cover.jpg'></h1>"); //inserts question image
  $(".99").find("." + cardSpot2).html("");
  $(".99").find("." + cardSpot2).html("<h1><img class=class='img-responsive' src='pac12/cover.jpg'></h1>"); //inserts question image
  indexOfgridCoords1 = undefined;
  indexOfgridCoords2 = undefined;
}



$(document).ready(function(){

  $("#startGame").click(function() {

    theBoard = new Board;

  });

  $(".grid").click(function() {
    cardSpot = parseInt($(this).attr("class")); // grabs id and converts to number
    boardSection = parseInt($(this).parent().attr("class"));
    //showImage(cardSpot);
    theBoard.cardStateChanger(cardSpot, boardSection);

    theBoard.matchFinder();



  });

});
