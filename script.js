"use strict";
// DOM Manipulation
// make JS interact with a web-page
// select an element with document.querySelector
// console.log(document.querySelector(".message").textContent);

// Document Object Model: stractured representation of HTML doc. Allos JS to manipulate elements and styles.
// stored in tree structure. Each element is a node in the tree.

// change the texContent of a html element.
// // document.querySelector(".message").textContent = "Congratulations!";
// console.log(document.querySelector(".number").textContent);
// document.querySelector(".number").textContent = 16;
// console.log(document.querySelector(".score").textContent);
// document.querySelector(".score").textContent = 13;

// // In input fields USE .value to access the element inside the html tag
// // document.querySelector(".guess").value = 14;
// console.log(document.querySelector(".guess").value);

// Events -> something that happens in the page
//eventListener -> 2 paramenters (name event, function)
// event handler is the funciton passed as a parameter that will run when the event is triggered

// GAME LOGIC
// define secret number to campare with guess
// Math.random() will get you a float between 0-1
// Math.trunc will remove the decimal
let number = Math.trunc(Math.random() * 20) + 1;
// set the score in variable
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guessedNum = Number(document.querySelector(".guess").value);
  console.log(guessedNum);
  // set every scenario
  // if there is no guess
  if (!guessedNum) {
    document.querySelector(".message").textContent = "No number 😠";
  } else if (guessedNum === number) {
    // if guess is correct
    document.querySelector(".message").textContent = "Congratulations!";
    // when guessed corrected show both scores
    document.querySelector(".number").textContent = number;
    // Change CSS styles with JS -> selectElement.style.property = "value"
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // high schore
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessedNum < number) {
    // Guess 2 high
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "GAME OVER";
    }
  } else if (guessedNum > number) {
    // Guess 2 low
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "GAME OVER";
    }
  }
});

// Again button
document.querySelector(".again").addEventListener("click", function () {
  // reload page (don't reload. we lose the HighScore)
  // location.reload();
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

// Refactor
