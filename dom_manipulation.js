/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

init();

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

// EVENT LISTENER

document.querySelector(".btn-roll").addEventListener("click", function() {
  //random number

  var dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  //display
  var diceDOM = document.querySelector(".dice");
  diceDOM.src = "dice-" + dice + ".png";
  diceDOM.style.display = "block";

  if (dice !== 1) {
    //continue
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    //next player
    nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  //add cutrrent scor eto global score
  //ups ui
  scores[activePlayer] += roundScore;
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    alert(activePlayer + 1 + " Ganhou o jogo!");
  } else {
    nextPlayer();
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //document.querySelector(".player-0-panel").classList.remove("active");
  //document.querySelector(".player-1-panel").classList.add("active");

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click", init);

/* console.log(dice); */

//document.querySelector("#current-" + activePlayer).textContent = dice;
/* document.querySelector("#current-" + activePlayer).innerHTML =
  "<em>" + dice + "<em/>"; */

/* var x = document.querySelector("#score-1").textContent;
console.log(x);
var x = document.querySelector("#score-1");
console.log(x);



/* function btn() {
  console.log("Btn clicked");
}
document.querySelector(".btn-roll").addEventListener("click", btn); */