import { request } from "../api/client.js";

export default function CardList({ $target, initialState }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const fetchCardList = async () => {
    const cardList = await request("/json/card.json");
    this.setState(cardList);
  };

  fetchCardList();

  this.template = () => {
    if (!this.state) {
      return;
    }

    return `
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

  this.render = () => {
    $target.innerHTML = this.template();
  };

  this.render();
}
