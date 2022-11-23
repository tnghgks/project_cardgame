import CardGame from "./components/CardGame.js";

const $main = document.querySelector(".main-wrapper");
const cardgame = new CardGame($main);

cardgame.setup();
cardgame.addEvent();
