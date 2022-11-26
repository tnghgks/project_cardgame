import CardGame from "./components/CardGame.js";

const $root = document.querySelector(".root");
const cardgame = new CardGame($root);

cardgame.setup();
