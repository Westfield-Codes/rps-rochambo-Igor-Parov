/* Global Variables */
let score = [0, 0];
let rounds = 5;

function main(finalWinner) {
   rounds = setRounds();
   for (let round = 0; round < rounds; round++) {
      let winner = rpsRound();
      scoreBoard(winner);
   }
   finalWinner = FinalWinner();
   alert("The final score is " + score + ". \n" + finalWinner + " won!")

   
}

function setRounds() {
   return 5;
}

function rpsRound() {

   let u = "";
   let c = "";
   while (u == c) {
      u = userTurn()
      c = cpuTurn()
      if (u == c) alert("We both chose " + c)
      
    }
   
   let combo = u + c;
   let winner = findWinner(combo)
   alert("You chose " + "(" + u + ")" + " and I chose " + "(" + c + ")" + " " + winner + " won!")
   return winner;
  
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
   let moves = ["r", "p", "s"];
   let turn = Math.floor(Math.random() * 3);
   c = moves[turn];
   return c;

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