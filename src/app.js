/* eslint-disable */
import "bootstrap";
import "./style.css";

const botonRefresh = document.querySelector("#refresh");
const botonReset = document.querySelector("#reset");
const icono1 = document.querySelector(".icono1");
const icono2 = document.querySelector(".icono2");
const numeroCarta = document.querySelector(".numero");
const baraja = [];
const barajaSalida = [];
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
      baraja.push([n, p]);
    }
  }
  return baraja;
};
generarBaraja();

const generarCarta = () => {
  let carta;
  if (baraja.length === 0) {
    alert("No quedan mas combinaciones! Resetea la baraja");
  } else {
    let random = Math.floor(Math.random() * baraja.length);
    const numeroSelec = baraja[random][0];
    const paloSelec = baraja[random][1];
    carta = [numeroSelec, paloSelec];
    barajaSalida.push(carta);
    baraja.splice(random, 1);
    icono1.innerHTML = paloSelec;
    icono2.innerHTML = paloSelec;
    numeroCarta.innerHTML = numeroSelec;
  }
};

const reseteo = () => {
  barajaSalida.splice(0, barajaSalida.length);
  baraja.splice(0, baraja.length);
  generarBaraja();
  alert("Baraja reseteada!");
};

botonRefresh.addEventListener("click", generarCarta, false);
botonReset.addEventListener("click", reseteo, false);

window.onload = function() {
  generarCarta();
  console.log("Hello Rigo from the console!");
};
