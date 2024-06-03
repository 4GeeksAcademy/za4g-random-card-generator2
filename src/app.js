/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Generating random card...");

  let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
  let suitShape = ["♦", "♥", "♠", "♣"];
  let suitColor = ["red", "black"];

  let randomRank = Math.round(Math.random() * 12);
  let randomSuitShape = Math.round(Math.random() * 3);
  let randomSuitColor = Math.round(Math.random() * 1);

  document.getElementById("suitTopLeft").style.color =
    suitColor[randomSuitColor];
  document.getElementById("suitBottomRight").style.color =
    suitColor[randomSuitColor];

  document.getElementById("suitTopLeft").innerHTML = suitShape[randomSuitShape];

  document.getElementById("rank").innerHTML = ranks[randomRank];

  document.getElementById("suitBottomRight").innerHTML =
    suitShape[randomSuitShape];
};
