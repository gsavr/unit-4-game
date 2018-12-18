var winningNumber = ""; // store winning number for game
var p1Score = "";   // store value for each crystal for the game
var p2Score = "";
var p3Score = "";
var p4Score = "";
var playerScore = "";
var wins = 0;
var losses = 0;

function Start(){
    playerScore = 0; //set score to 0

    $("#score").text(playerScore); // write initial score to html

    winningNumber = Math.floor(Math.random() * 101 + 19); // choose random number bet 19-120

    $("#winningNumber").text(winningNumber); // write winning number to html

    p1Score = Math.floor(Math.random() * 12 + 1); // choose random number bet 19-120
    p2Score = Math.floor(Math.random() * 12 + 1); // choose random number bet 19-120
    p3Score = Math.floor(Math.random() * 12 + 1); // choose random number bet 19-120
    p4Score = Math.floor(Math.random() * 12 + 1); // choose random number bet 19-120

    console.log(winningNumber);
    console.log(playerScore);
    console.log(p1Score);
    console.log(p2Score);
    console.log(p3Score);
    console.log(p4Score);
}


Start();
