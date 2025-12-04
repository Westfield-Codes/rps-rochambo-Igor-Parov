

/* Global Variables */
var score = [0, 0];
var rounds;
var round = 1;
var board = document.getElementById("gameBoard");
var move = "rock";
var scoreBoard = document.getElementById("scoreBoard");
function main() {
   
   document.getElementById("playButton").style.display = "none";
   document.getElementById("rules").style.display = "none";
   let instructions = document.createElement("p");
   instructions.innerHTML = "How many rounds would you like to play? (1-10)";
   board.appendChild(instructions);
   let roundsBox = document.createElement("input");
   roundsBox.id = "roundsBox";
   board.appendChild(roundsBox);
   let roundsButton = document.createElement("button");
   roundsButton.innerHTML = "Start Game";
   roundsButton.id = "button";
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
}
function buildScoreBoard(){
let roundNumber = document.createElement("p");
   roundNumber.id="roundNumber";
   roundNumber.innerHTML="Round " + round + " of " + rounds;
   scoreBoard.appendChild(roundNumber);
   let player = document.createElement("div");
   player.id = "player";
   player.innerHTML = "Player" + ": " + score[0];
   scoreBoard.appendChild(player);
   let computer = document.createElement("div");
   computer.id = "computer";
   computer.innerHTML = "Computer"+ ": " + score[1];
   scoreBoard.appendChild(computer);
   stopGame(rounds);
}
function setRounds() {
  rounds = parseInt(document.getElementById("roundsBox").value);
  buildConsole();
  buildScoreBoard();
  return rounds;
  
}
function playingPaper(){
   closePopup("none");
   move = "paper";
   cpuTurn();
}
function playingRock(){
   closePopup("none");
   move = "rock";
   cpuTurn();
}
function playingScissors(){
   closePopup("none");
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
function cpuTurn() {
   
   
   let moveWords = ["rock", "paper", "scissors"];
   let moves = ["r", "p", "s"];
   let u = moves[moveWords.indexOf(move)];
   let turn = Math.floor(Math.random() * 3);
   c = moves[turn];
   let user = "";
   if(u=="p"){
      user = "(paper)"
   }
   if(u=="r"){
      user = "(rock)"
   }
   if(u=="s"){
      user = "(scissors)"
   }
   if(c=="p"){
      comp = "(paper)"
   }
   if(c=="r"){
      comp = "(rock)"
   }
   if(c=="s"){
      comp = "(scissors)"
   }
   if(u == c) {
      let message = "We both chose" + " " + user;
      makePopUp(message, buildConsole)   
    }
    else{
      round++;
      let combo = u + c;
      let winner = findWinner(combo);
      let message = "You chose " + user + " and I chose " + comp + " , so " + winner + " won!";      makePopUp(message, updateScore(winner));
      
}
}
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
function makePopUp(message,target){
   let popup = document.createElement("div");
   popup.id="popup";
   popup.addEventListener('click', () => {
      closePopup(target); 
    });
   let popP = document.createElement("p");
   popP.innerHTML = message;
   popup.appendChild(popP);
   document.body.insertBefore(popup, board);
}
function closePopup(target){
if(document.getElementById("popup")) document.getElementById("popup").remove();
if(target !="none") target;


}
function updateScore(winner){
if (winner == "I") score[1]++;
   else score[0]++;
   scoreBoard.innerHTML = "";
   buildScoreBoard();
}
function summarry(scores, finalWinner){
   let winnerInfo = document.createElement("div");
   winnerInfo.id = "winnerInfo";
   let decision = document.createElement("p");
   decision.id = "decision";
   decision.innerHTML = "The Final Winner Of " + scores + " Round(s)  -----> " + finalWinner;
   winnerInfo.appendChild(decision);
   const imageElement = document.createElement('img');
   imageElement.id = "Image";
   if(finalWinner=="You"){
      imageElement.src = 'victory.png';
      imageElement.alt = 'Winner Image';
   }
   else{
      imageElement.src = 'lose.png';
      imageElement.alt = 'Loser Image';
   }
   winnerInfo.appendChild(imageElement);
   let playAgain = document.createElement("BUTTON");
   playAgain.id = "playAgain";
   playAgain.innerHTML = "Play Again"
   playAgain.addEventListener("click", function() {
    window.location.reload();
    
    return false;
    
   });
   
   winnerInfo.appendChild(playAgain);
   document.body.appendChild(winnerInfo);
}
function stopGame(rounds){
   let scores = score[0] + score[1];
      if(scores>=rounds){
      document.body.innerHTML = "";
      let finalWinner=FinalWinner();
      summarry(scores,finalWinner);
      return scores;
   }
}