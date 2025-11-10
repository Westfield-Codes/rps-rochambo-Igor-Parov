const { use } = require("react");

/* Global Variables */
let score = [0,0];

function main(){
cpuTurn()
let you = "";
let computer = "";
while(you!=computer){
you = userTurn() 
computer = cpuTurn()
if (u=c) alert("We both chose " + computer)
}
let winner = findWinner(you, computer)
alert("You chose " + you + " ,and I chose " + computer + " " + winner + " won!" )
}


function setRounds() {

}

/* RPS Round
* plays a round of RPS and tells the winner
* @param: none
* @return:none
*/
function rpsRound() {

}

/* userturn
* user can choose r, p, or s.
* if bad Input, give new choice
* @param:none
* @return:choice
*/
function userTurn() {
let choice = prompt("r, p, s?")
let moves = ["r", "p", "s"];
if (!moves.includes(choice)){ alert("Invalid Input!") 
return userTurn ;}
else{
return choice;
}
}

/* cpuTurn
* computer choose between r, p, or s
* @param:none
* @return: choice
*/
function cpuTurn() {
let moves = ["r", "p", "s"];
let turn = Math.floor(Math.random()*3);
computer = moves[turn];
return turn;

}

/* findWinner
* takes user and computer turn
* decides who the winner is
* returns winner
* @param:u,c
* @return: winner
*/
function findWinner(u,c) {

}