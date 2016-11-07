var cardSpot;


$(document).ready(function(){

  $(".grid").click(function() {
    cardSpot = parseInt($(this).attr("class")); // grabs id and converts to number

    var showImage = function(cardSpot) {
      $("." + cardSpot).html("");
      $("." + cardSpot).html("<h1><img class=' img-responsive' src='img/" + cardSpot + ".jpg'></h1>"); // Inserts image in proper grid square by ID
    };

  showImage(cardSpot);

  var imageReveal = function(cardSpot) {
    debugger;
    $("." + cardSpot).html("");
    $("." + cardSpot).html("<h1><img src='img/question.jpg'></h1>");//inserts question image after 5 seconds
  }

  setTimeout(function(){ imageReveal(cardSpot); }, 5000);



  });

});
