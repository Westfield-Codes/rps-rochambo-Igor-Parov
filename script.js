/* Global Variables */
var score = [0, 0];
var rounds = 5;
var round = 1;
var board = document.getElementById("gameBoard");
var move = "rock";
var scoreBoard = document.getElementById("scoreBoard");

function main() {
   
   document.getElementById("playButton"). style.display = "none";
   let instructions = document.createElement("p");
   instructions.innerHTML = "How many rounds would you like to play? (1-10)";
   board.appendChild(instructions);
   let roundsBox = document.createElement("input");
   roundsBox.id = "roundsBox";
   board.appendChild(roundsBox);
   let roundsButton = document.createElement("button");
   roundsButton.innerHTML = "Start Game";
   roundsButton.addEventListener("click", setRounds);
   board.appendChild(roundsButton);
   

}
function buildConsole() { 
   board.innerHTML = "";
   let playRock = document.createElement("div");
   playRock = document.createElement("BUTTON");
   playRock.id="rock";
   playRock.innerHTML="rock";
   playRock.className="move";
   playRock.addEventListener("click",playingRock);
   board.appendChild(playRock);
   let playScissors = document.createElement("div");
   playScissors = document.createElement("BUTTON");
   playScissors.id="scissors";
   playScissors.innerHTML="scissors";
   playScissors.addEventListener("click",playingScissors);
   playScissors.className="move"
   board.appendChild(playScissors);
   let playPaper = document.createElement("div");
   playPaper = document.createElement("BUTTON");
   playPaper.id="paper";
   playPaper.innerHTML="paper";
   playPaper.addEventListener("click",playingPaper);
   playPaper.className="move"
   board.appendChild(playPaper);
   let lineBreak = document.createElement("br");
   board.appendChild(lineBreak);
   let roundNumber = document.createElement("p");
   roundNumber.id="roundNumber";
   roundNumber.innerHTML="Round " + round + " of " + rounds;
   scoreBoard.appendChild(roundNumber);
   let player = document.createElement("div");
   player.id = "player";
   player.innerHTML = "Player";

   scoreBoard.appendChild(player);
   let computer = document.createElement("div");
   computer.id = "computer";
   computer.innerHTML = "Computer";

   scoreBoard.appendChild(computer);
}

function setRounds() {
  rounds = parseInt(document.getElementById("roundsBox").value);
  buildConsole();
  
}
function playingPaper(){
   move = "paper";
   cpuTurn();
}
function playingRock(){
   move = "rock";
   cpuTurn();
}
function playingScissors(){
   move = "scissors";
   cpuTurn();
}
function scoreBoard(winner) {
   if (winner == "I") score[1] += 1;
   else score[0] += 1;
}

function FinalWinner() {
   let finalWinner = "";
   if (score[0] > score[1]) finalWinner = "You";
   else finalWinner = "I";
   return finalWinner;
}

/* RPS Round
 * plays a round of RPS and tells the winner
 * @param: none
 * @return:none
 */


/* userturn
 * user can choose r, p, or s.
 * if bad Input, give new choice
 * @param:none
 * @return:choice
 */
function userTurn() {
   let choice = prompt("r, p, s?")
   let moves = ["r", "p", "s"];
   if (!moves.includes(choice)) {
      alert("Invalid Input!")
      return userTurn();
   } else {
      return choice;
   }

}

/* cpuTurn
 * computer choose between r, p, or s
 * @param:none
 * @return: choice
 */
function cpuTurn() {
   board.innerHTML="";
   let moveWords = ["rock", "paper", "scissors"];
   let moves = ["r", "p", "s"];
   let u = moves[moveWords.indexOf(move)];
   let turn = Math.floor(Math.random() * 3);
   c = moves[turn];
   while (u == c) {
      alert("We both chose " + c)
      buildConsole()
      c = cpuTurn()
    }
let combo = u + c;
   let winner = findWinner(combo)
   let cmove = moveWords[turn]
   alert("You chose " + "(" + move + ")" + " and I chose " + "(" + cmove + ")" + " " + winner + " won!");
   round++;
}

/* findWinner
 * takes user and computer turn
 * decides who the winner is
 * returns winner
 * @param:u,c
 * @return: winner
 */
function findWinner(combo) {
   let match = "";
   let winner = "";
   let winArray = [
      ["r", "p", "I"],
      ["r", "s", "You"],
      ["s", "r", "I"],
      ["s", "p", "You"],
      ["p", "s", "I"],
      ["p", "r", "You"]
   ]
   for (i = 0; i < winArray.length; i++) {
      match = winArray[i][0] + winArray[i][1]
      if (match == combo) {
         winner = winArray[i][2]
      }
   }
   return winner;
}