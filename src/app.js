/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["Un vagabundo", "Mi tio", "Mi perro", "Mi suegra"];
const theacction = ["se comió", "rompió", "ensució", "robó"];
const what = ["mi trabajo", "mi móvil", "mi consola", "mis gafas"];
const when = [
  "mientras yo dormía",
  "mientras yo no miraba",
  "cuando estaba en la ducha",
  "cuando yo no estaba en casa"
];

window.onload = () => {
  const whofrase = Escusas(who);
  const theacctionfrase = Escusas(theacction);
  const whatfrase = Escusas(what);
  const whenfrase = Escusas(when);

  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuses").innerHTML = `${Escusas(who)} ${Escusas(
      theacction
    )} ${Escusas(what)} ${Escusas(when)}`;
  });

  document.querySelector("#btnwho").addEventListener("click", () => {
    document.querySelector("#excuses").innerHTML = `${whofrase} ${Escusas(
      theacction
    )} ${Escusas(what)} ${Escusas(when)}`;
  });

  document.querySelector("#btntheacction").addEventListener("click", () => {
    document.querySelector("#excuses").innerHTML = `${Escusas(
      who
    )} ${theacctionfrase} ${Escusas(what)} ${Escusas(when)}`;
  });

  document.querySelector("#btnwhat").addEventListener("click", () => {
    document.querySelector("#excuses").innerHTML = `${Escusas(who)} ${Escusas(
      theacction
    )} ${whatfrase} ${Escusas(when)}`;
  });

  document.querySelector("#btnwhen").addEventListener("click", () => {
    document.querySelector("#excuses").innerHTML = `${Escusas(who)} ${Escusas(
      theacction
    )} ${Escusas(what)} ${whenfrase}`;
  });

  function Escusas(str) {
    const aleatorio = Math.floor(Math.random() * str.length);
    return str[aleatorio];
  }
};
