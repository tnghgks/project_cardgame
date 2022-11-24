import Component from "../core/Component.js";

class CardList extends Component {
  constructor($target, cardData) {
    super($target);
    this.cardData = cardData;
  }

  template(card) {
    return `
    <li class="item-card">
      <div class="div-back"></div>
      <div class="div-front div-hidden" style="background-position: ${card.position.x}px ${card.position.y}px;"></div>
    </li>`;
  }
  append() {
    this.cardData.forEach((card) => {
      this.$target.innerHTML += this.template(card);
    });
  }
}

export default CardList;
