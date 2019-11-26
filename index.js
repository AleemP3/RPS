var compChoices = ["Rock", "Paper", "Scissor"];

var userChoice = "";
var compChoice = "";
var winning = "You win!"; 
var losing = "You lose!";
var tie = "Tied play again"; 
var playAgain = "Play again and choose another choice"; 
var userScores = 0; 
var compScores = 0;
var tieScores = 0;


function paper() {
  if (userChoice === "paper" && compChoice === "Rock") {
    var winner = document.getElementById("game");
      winner.innerHTML = winning;
    userScores++;
    var again =  document.getElementById("again");
      again.innerHTML = playAgain;
    var score =  document.getElementById("score");
      score.innerHTML = "Your Score: " + userScores + " Comp Score: " + compScores + " Tie Score: " + tieScores;
  } else if (userChoice === "paper" && compChoice === "Scissor") {
    var loser = document.getElementById("game");
      loser.innerHTML = losing;
    var again =  document.getElementById("again");
      again.innerHTML = playAgain;
    compScores++;
    var compS = document.getElementById("score");
      compS.innerHTML = "Your Score: " + userScores + " Comp Score: " + compScores + " Tie Score: " + tieScores;
  } else if (userChoice === "paper" && compChoice === "Paper") {
    var tied = document.getElementById("game");
      tied.innerHTML = tie; 
      tieScores++;
    var again =  document.getElementById("again");
      again.innerHTML = playAgain;
    var tieS = document.getElementById("score");
      tieS.innerHTML = "Your Score: " + userScores + " Comp Score: " + compScores + " Tie Score: " + tieScores;
  }
}

function rock() {
  if (userChoice === "rock" && compChoice === "Scissor") {
    var winner = document.getElementById("game");
      winner.innerHTML = winning;
    userScores++;
    var again =  document.getElementById("again");
      again.innerHTML = playAgain;
    var score =  document.getElementById("score");
      score.innerHTML = "Your Score " + userScores + " Comp Score: " + compScores + " Tie Score: " + tieScores;
  } else if (userChoice === "rock" && compChoice === "Paper") {
    var loser = document.getElementById("game");
      loser.innerHTML = losing;
    var again =  document.getElementById("again");
      again.innerHTML = playAgain;
    compScores++;
    var compS = document.getElementById("score");
      compS.innerHTML = "Your Score " + userScores + " Comp Score: " + compScores + " Tie Score: " + tieScores;
  } else if (userChoice === "rock" && compChoice === "Rock") {
    var tied = document.getElementById("game");
      tied.innerHTML = tie; 
      tieScores++;
    var again =  document.getElementById("again");
      again.innerHTML = playAgain;
    var tieS = document.getElementById("score");
      tieS.innerHTML = "Your Score: " + userScores + " Comp Score: " + compScores + " Tie Score: " + tieScores;
  }
}

function scissor() {
  if (userChoice === "scissor" && compChoice === "Paper") {
    var winner = document.getElementById("game");
      winner.innerHTML = winning;
    userScores++;
    var again =  document.getElementById("again");
      again.innerHTML = playAgain;
    var score =  document.getElementById("score");
      score.innerHTML = "Your Score " + userScores + " Comp Score: " + compScores + " Tie Score: " + tieScores;
  } else if (userChoice === "scissor" && compChoice === "Rock") {
    var loser = document.getElementById("game");
      loser.innerHTML = losing;
    var again =  document.getElementById("again");
      again.innerHTML = playAgain;
    compScores++;
    var compS = document.getElementById("score");
      compS.innerHTML = "Your Score " + userScores + " Comp Score: " + compScores + " Tie Score: " + tieScores;
  } else if (userChoice === "scissor" && compChoice === "Scissor") {
    var tied = document.getElementById("game");
      tied.innerHTML = tie; 
      tieScores++; 
    var again =  document.getElementById("again");
      again.innerHTML = playAgain;
    var tieS = document.getElementById("score");
      tieS.innerHTML = "Your Score: " + userScores + " Comp Score: " + compScores + " Tie Score: " + tieScores;
  }
}

function loop() {
    var choices = document.getElementsByClassName("choices"); 
    for(var i = 0; i < choices.length; i++) {
      choices[i].addEventListener("click", function() {
        userChoice = this.id 
        console.log(userChoice);
        compChoice = compChoices[Math.floor(Math.random()*compChoices.length)];
        console.log(compChoice);
        var player = document.getElementById("player");
        player.innerHTML = "Player picks: " + userChoice;
      var computer = document.getElementById("computer");
        computer.innerHTML = "Computer picks: " + compChoice;
        paper();
        rock();
        scissor();
      });
    };
  }; 
  function game() {
      loop();  
  }

  game();



