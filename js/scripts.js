// Back End Logic

function Board(){
  //this.gridCoords1 = [0, 1, 2, 3, 4, 5, 6, 7],
  //this.gridCoords2 = [0, 1, 2, 3, 4, 5, 6, 7]
  this.oneArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
}

//var theBoard;
var cardSpot;
//var boardSection;
//var indexOfgridCoords1;
//var indexOfgridCoords2;
var firstCard;
var secondCard;

// var boardCheck = function(boardsection) {
// debugger;
//   if (boardsection === 98) {
//     return "board 98";
//   } else if (boardsection === 99) {
//     return "board 99";
//   }
// }

Board.prototype.arrayMatcher = function(cardSpot) {
debugger;
  if (firstCard === cardSpot - 8 || cardSpot + 8 === firstCard) {
    secondCard = theBoard.oneArray.indexOf(theBoard.oneArray[cardSpot]);
    //theBoard.oneArray[firstCard] = "matched";
    //theBoard.oneArray[secondCard] = "matched";
    showImage2(firstCard,secondCard);
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

// Board.prototype.cardStateChanger = function(currentCard, boardsection) {
//   var boardsection = boardCheck(boardSection);
//   if (boardsection === "board 98") {
//     theBoard.gridCoords1[currentCard] = "clicked";
//   } else if (boardsection === "board 99") {
//     theBoard.gridCoords2[currentCard] = "clicked";
//   }
// }
//
// Board.prototype.matchFinder = function() {
//   for (i = 0; i < theBoard.gridCoords1.length; i++) {
//     if (theBoard.gridCoords1[i] === "clicked") {
//        indexOfgridCoords1 = theBoard.gridCoords1.indexOf(theBoard.gridCoords1[i]);
//        theBoard.gridCoords1[i] = i;
//     }
//   }
//    for (i = 0; i < theBoard.gridCoords2.length; i++) {
//
//     if (theBoard.gridCoords2[i] === "clicked") {
//        indexOfgridCoords2 = theBoard.gridCoords2.indexOf(theBoard.gridCoords2[i]);
//        theBoard.gridCoords2[i] = i;
//     }
//    }
//
//    if (indexOfgridCoords1 === indexOfgridCoords2) {
//      theBoard.gridCoords1[indexOfgridCoords1] = "matched";
//      theBoard.gridCoords2[indexOfgridCoords2] = "matched";
//      showImage2(indexOfgridCoords1,indexOfgridCoords2);
//      indexOfgridCoords1 = undefined;
//      indexOfgridCoords2 = undefined;
//      theBoard = new Board;
//    } else if (indexOfgridCoords1 !== indexOfgridCoords2 && indexOfgridCoords2 !== undefined && indexOfgridCoords1 !== undefined) {
//       pictureTimer();
//    } else {
//      showImage(cardSpot);
//    }
// }

var pictureTimer = function() {
debugger;
  showImage(secondCard);
  setTimeout(function() {
  cardBack2(firstCard,secondCard); }, 1500);
  theBoard = new Board;
  // firstCard = undefined;
  // secondCard = undefined;
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
debugger;
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
debugger;
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
    //boardSection = parseInt($(this).parent().attr("class"));
    //showImage(cardSpot);
    //theBoard.cardStateChanger(cardSpot, boardSection);
    //theBoard.matchFinder();
    theBoard.arrayMatcher(cardSpot);
  });
});
