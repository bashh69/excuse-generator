/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["Bill Murray", "Jim Morrison", "Spiderman", "Cheche Abreu"];
  let action = ["singed", "blew up", "killed", "flew"];
  let what = ["a demon", "the Covenant", "the Gods", "Joe Biden"];
  let when = [
    "before the class",
    "several years ago",
    "after sex",
    "during lunch"
  ];

  function excusesForWork() {
    let who1 = who[Math.floor(Math.random() * who.length)];
    let action1 = action[Math.floor(Math.random() * action.length)];
    let what1 = what[Math.floor(Math.random() * what.length)];
    let when1 = when[Math.floor(Math.random() * when.length)];

    document.getElementById("excuse").innerHTML =
      who1 + " " + action1 + " " + what1 + " " + when1;
  }

  document.getElementById("myBtn").addEventListener("click", excusesForWork);

  console.log("They called him the Excuse Slayer!");
};
