var wins = 0;
var losses = 0;
randomNumber;
totalScore = 0;

function begin(){
    
$(".crystals").empty();

randomNumber = Math.floor(Math.random() * 101) + 19;

$("#randomNumber").text(randomNumber);

console.log(randomNumber);


    for (var i = 0; i < 4; i++){
        var randomValue = Math.floor(Math.random() * 11) +1;
        console.log(randomValue);       

        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", "assets/images/gem2.jpg");

        imageCrystal.attr("data-random-value", randomValue);

        $(".crystals").append(imageCrystal);

    };
    
};
begin();

$(document).on("click", ".crystal-image", function() {

    var num = parseInt($(this).attr("data-random-value"));

    totalScore += num;

    $("#totalScore").text(totalScore);
    console.log(totalScore);

    if(totalScore > randomNumber){
        losses++;
        $("#losses").text(losses);
        begin();
        totalScore = 0;
        console.log("you lose")
    }

    else if(totalScore === randomNumber){
        wins++;
        $("#wins").text(wins);
        begin();
        totalScore = 0;
    }

  });