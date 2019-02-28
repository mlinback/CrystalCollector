//Global Variables
//--------------------------------------------------------------------------------------------

//Crystal Variables
var crystal = {
    green:
    {
        name: "Green",
        value: 0
    },
    pink:
    {
        name: "Pink",
        value: 0
    },
    purple:
    {
        name: "Purple",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    },
};

//Scores: Current and Target
var currentScore = 0;
var targetScore = 0;

// Wins and Loses
var winCount = 0;
var loseCount = 0;

//Functions
//--------------------------------------------------------------------------------------------
// Helper function to get random numbers
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Start and restart game
var startGame = function () {

    //resert Current Score
    currentScore = 0;

    //set new Target Score (between 19-120)
    targetScore = getRandom(19, 120);

    //set new values for crystals (between 1-12)
    crystal.green.value = getRandom(1, 12);
    crystal.pink.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);


    //Change HTML to reflect change
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    // Test
    console.log("-----------------------------")
    console.log("Target Score: " + targetScore);
    console.log("Green: " + crystal.green.value + " | Pink: " + crystal.pink.value + " | Purple:" + crystal.purple.value + " | Yellow: " + crystal.yellow.value);
    console.log("-----------------------------")
}

//Function to respond to crystal clicks
var addValues = function(crystal) {

    // Change Current Score
    currentScore = currentScore = crystal.value;

    //Change HTML to reflect changes in currentScore
    $("#yourScore").html(currentScore);

    // Call checkWin function
    checkWin();


    //Test
    console.log("Your Score: " + currentScore);
}

//Check if user won/lost and reset game
var checkWin = function() {

    // Check if currentScore is larger than targetScore
    if(currentScore > targetScore) {
        alert("Sorry, you lost!");
        console.log("You lost!");

        // Add to loss counter
        lossCount++;

        // Change loss counter HTML
        $("#lossCount").html(lossCount);

        // Restart game
        startGame();
    }

    else if (currentScore == targetScore) {
        alert("Congratulations! You won!");
        console.log("You won!");

        // Add to win counter
        winCount++;

        // Change win counter HTML
        $("#winCount").html(winCount);

        // Restart game
        startGame();
    }

}

//Main Process
//--------------------------------------------------------------------------------------------

//Starts game first time
startGame();

$("#green").click(function () {
    addValues(crystal.green);
});

$("#pink").click(function () {
    addValues(crystal.pink);
});

$("#purple").click(function () {
    addValues(crystal.purple);
});

$("#yellow").click(function () {
    addValues(crystal.yellow);
});