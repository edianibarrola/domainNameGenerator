/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Built by Edian");
};

let pronoun = ["The", "Our", "Your", "My"];
let adjective = ["Great", "Big", "Massive", "Gigantic"];
let noun = ["Jogger", "Raccoon", "Grandmother", "Tortoise"];
let domainEnd = [".com", ".net", ".io", ".org", ".edu", ".gov"];

let myDomainGenerator = () => {
  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adjective.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        for (let c = 0; c < domainEnd.length; c++) {
          document.querySelector("#domainDisplay").innerHTML +=
            "<li class='list-group-item'>" +
            "http://www." +
            pronoun[i] +
            adjective[a] +
            noun[b] +
            domainEnd[c] +
            "</li>";
        }
      }
    }
  }
};

document.querySelector(".btn").addEventListener("click", myDomainGenerator);
