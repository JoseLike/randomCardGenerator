/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const botonRefresh = document.querySelector("#refresh");
const botonReset = document.querySelector("#reset");
const iconos = document.querySelector(".icono");
const baraja = [];
const numero = [
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
const generarBaraja = () => {
  for (let n of numero) {
    for (let p of palo) {
      baraja.push({ n, p });
    }
  }
  console.log(baraja);
};
generarBaraja();

const generarCarta = () => {
  let random = Math.floor(Math.random() * 51);

  const numeroSelec = baraja[random].n;
  const paloSelec = palo[random].p;
};

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
