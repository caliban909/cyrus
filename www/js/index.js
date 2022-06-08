// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

//Variables

//html elements
const Player1lp = document.querySelector(".player1lp");
const Player2lp = document.querySelector(".player2lp");
//buttons
const AddButtons = document.querySelectorAll(".upper");
const DelButtons = document.querySelectorAll(".lower");
const CoinButton = document.querySelector(".coin");
const DieButton = document.querySelector(".die");
const TimeButton = document.querySelector(".time");
const ResetButton = document.querySelector(".reset");

//lifepoints for player (p) 1 and 2
let player1 = 8000;
let player2 = 8000;

//functions

function lpupdate() {
  console.log("calculating lifepoints");
  Player1lp.innerHTML = player1;
  Player2lp.innerHTML = player2;
}

function addlp(player) {
  number = parseInt(prompt("How many Lifepoints?"));
  if (player == 1) {
    player1 += number;
  } else {
    player2 += number;
  }
  lpupdate();
  console.log("lifepoints added to player" + player + "'s total");
}

function dellp(player) {
  number = parseInt(prompt("How many Lifepoints?"));
  if (player == 1) {
    player1 -= number;
  } else {
    player2 -= number;
  }
  lpupdate();
  console.log("lifepoints removed from Player" + player + "'s total");
}

function cointoss() {
  let outcome = Math.floor(Math.random() * 2);
  if (outcome == 0) {
    alert("the outcome is: Heads");
  } else {
    alert("the outcome is: Tails");
  }
}

function dieroll() {
  let outcomes = [];
  let number = parseFloat(prompt("How many dice? (1-3)"));
  if (number > 3) {
    alert("Not a valid input");
    return;
  }
  for (let i = 0; i < number; i++) {
    let outcome = Math.floor(Math.random() * 6) + 1;
    outcomes.push(outcome);
  }
  alert("result: " + outcomes);
}

function stopwatch() {
  let number = parseFloat(prompt("How many seconds?"));
  window.setTimeout(() => alert("Time's up"), number * 1000);
}

function reset() {
  player1 = 8000;
  player2 = 8000;
  lpupdate();
}

//eventlistener
AddButtons[0].addEventListener("click", () => addlp(1));
AddButtons[1].addEventListener("click", () => addlp(2));
DelButtons[0].addEventListener("click", () => dellp(1));
DelButtons[1].addEventListener("click", () => dellp(2));
CoinButton.addEventListener("click", cointoss);
DieButton.addEventListener("click", dieroll);
TimeButton.addEventListener("click", stopwatch);
ResetButton.addEventListener("click", reset);

//start
lpupdate();
