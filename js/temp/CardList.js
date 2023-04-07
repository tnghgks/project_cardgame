import Component from "../core/Component.js";

class CardList extends Component {
  constructor($target, cardData, level) {
    super($target);
    this.cardData = cardData;
    this.levelToString(level);
    this.setup();
    $target.classList.add(this.level);
  }
  levelToString(level) {
    switch (level) {
      case 4:
        this.level = "easy";
        break;
      case 6:
        this.level = "normal";
        break;
      case 8:
        this.level = "hard";
        break;
    }
  }

  template(card) {
    return `
    <li class="item-card active">
      <div class="div-back"></div>
      <div class="div-front" style="background-position: ${card.position.x}px ${card.position.y}px;"></div>
    </li>`;
  }
  render() {
    this.cardData.forEach((card) => {
      this.$target.innerHTML += this.template(card);
    });
  }
}

export default CardList;
