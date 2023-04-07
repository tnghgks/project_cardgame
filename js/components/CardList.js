import { request } from "../api/client.js";

export default function CardList({ $target, props }) {
  this.state = [];

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const fetchCardList = async () => {
    const cardList = await request("/json/card.json");

    // 총 개수의 반만 가져오기
    const halfCardList = cardList.slice(0, props.initCount / 2);

    // 카드 합치기
    const totalCardList = halfCardList.concat(halfCardList);
    // 카드 섞기
    totalCardList.sort(() => Math.random() - 0.5);

    this.setState(totalCardList);
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
