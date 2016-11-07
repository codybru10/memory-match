var cardSpot;


$(document).ready(function(){

  $(".grid").click(function() {
    cardSpot = parseInt($(this).attr("id")); // grabs id and converts to number

    var showImage = function(cardSpot) {
      $("#" + cardSpot).html("<img class='img-responsive' src='img/" + cardSpot + ".jpg'>"); // Inserts image in proper grid square by ID
    };

  showImage(cardSpot);

  setTimeout(function(){ alert("Hello"); }, 3000);



  });

});
