/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const baraja = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const palo = ["♦", "♥", "♠", "♣"];

const picrandom = array => {
  let random = Math.floor(Math.random() * array.length);
  return random;
};

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
