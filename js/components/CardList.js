import { request } from "../api/client.js";

export default function CardList({ $target }) {
  const $cardList = document.createElement("ul");
  $cardList.classList = "list-card easy";
  $target.appendChild($cardList);

  this.state = [];

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const fetchCardList = async () => {
    const cardList = await request("/json/card.json");
    this.setState(cardList);
  };

  fetchCardList();

  this.render = () => {
    if (!this.state) {
      return;
    }

    $cardList.innerHTML = `
    ${this.state
      .map(
        (card) =>
          `
          <li class="item-card active">
            <div class="div-back"></div>
            <div class="div-front" style="background-position: ${card.position.x}px ${card.position.y}px;"></div>
          </li>
          `
      )
      .join("")}`;
  };

  this.render();
}
