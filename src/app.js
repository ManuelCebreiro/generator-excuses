/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  document.querySelector("#excuses").innerHTML = Escusas();

  function Escusas() {
    let who = ["Un vagabundo", "Mi tio", "Mi perro", "Mi suegra"];
    let what = ["se comió", "rompió", "ensució", "robó"];
    let when = [
      "mientras yo dormía",
      "mientras yo no miraba",
      "cuando estaba en la ducha"
    ];

    let whoramdon = Math.floor(Math.random() * who.length);
    let whatramdon = Math.floor(Math.random() * what.length);
    let whenramdon = Math.floor(Math.random() * when.length);

    return (
      who[whoramdon] +
      " " +
      what[whatramdon] +
      " mi trabajo " +
      " " +
      when[whenramdon]
    );
  }
};
