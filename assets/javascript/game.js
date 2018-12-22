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

    p1Score = Math.floor(Math.random() * 12 + 1); // choose random number bet 1-12
    p2Score = Math.floor(Math.random() * 12 + 1); 
    p3Score = Math.floor(Math.random() * 12 + 1); 
    p4Score = Math.floor(Math.random() * 12 + 1); 

    console.log(winningNumber);
    console.log(playerScore);
    console.log(p1Score);
    console.log(p2Score);
    console.log(p3Score);
    console.log(p4Score);
}

Start();

$("#gamepic1").on("click", function() {
    playerScore = p1Score + playerScore;

    console.log(playerScore);

    $("#score").text(playerScore);

    if(playerScore===winningNumber){
        win();
    }

    else if(playerScore > winningNumber){
        lose ()
    }
    
});

$("#gamepic2").on("click", function() {
    playerScore = p2Score + playerScore;

    console.log(playerScore);
    
    $("#score").text(playerScore);

    if(playerScore===winningNumber){
        win();
    }

    else if(playerScore > winningNumber){
        lose ()
    }
    
});

$("#gamepic3").on("click", function() {
    playerScore = p3Score + playerScore;

    console.log(playerScore);
    
    $("#score").text(playerScore);

    if(playerScore===winningNumber){
        win();
    }

    else if(playerScore > winningNumber){
        lose ()
    }
    
});

$("#gamepic4").on("click", function() {
    playerScore = p4Score + playerScore;

    console.log(playerScore);
    
    $("#score").text(playerScore);

    if(playerScore===winningNumber){
        win();
    }

    else if(playerScore > winningNumber){
        lose ()
    }
    
});

function win(){
    setTimeout(function() {
        alert("Congratulations! You Won! You reached " + winningNumber);
    }, 200);
    wins++
    $("#wins").text(wins);
    setTimeout(function() {
        Start();
    }, 500);
}

function lose (){
    alert("You Lose! You went past " + winningNumber);
    losses++
    $("#losses").text(losses);
    Start();
}
