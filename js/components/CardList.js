import { request } from "../api/client.js";
import CardManager from "../lib/service/CardManager.js";

export default function CardList({ $target, props }) {
  const { pathname } = location;
  const [, , level] = pathname.split("/");

  this.state = [];

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

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

  this.setup = async () => {
    const cardManager = new CardManager();

    this.render();

    const cardList = await cardManager.setCardList(props.initCount);
    this.setState(cardList);

    cardManager.showCardBeforeStart(level);
  };

  this.setup();
}
