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
  console.log(number + " lifepoints added to player" + player + "'s total");
}

function dellp(player) {
  number = parseInt(prompt("How many Lifepoints?"));
  if (player == 1) {
    player1 -= number;
  } else {
    player2 -= number;
  }
  lpupdate();
  console.log(number + " lifepoints removed from Player" + player + "'s total");
}

function cointoss() {
  let outcomes = [];
  let number = parseFloat(prompt("How many coins? (1-3)"));
  if (number > 3) {
    alert("Not a valid input");
    return;
  }
  for (let i = 0; i < number; i++) {
    let outcome = Math.floor(Math.random() * 2);
    if (outcome == 0) {
      outcome = "Heads";
    } else {
      outcome = "Tails";
    }
    outcomes.push(outcome);
    console.log("coin has been tossed");
  }
  alert("result: " + outcomes);
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
    console.log("a die has been rolled");
  }
  alert("result: " + outcomes);
}

function stopwatch() {
  let number = parseFloat(prompt("How many seconds?"));
  window.setTimeout(() => alert("Time's up"), number * 1000);
  console.log("Timer has been set for " + number + " seconds");
}

function reset() {
  console.log("lifepoints will be reset");
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
