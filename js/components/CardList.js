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
// cardData.forEach((card) => {
//   const $li = document.createElement("li");
//   const $frontDiv = document.createElement("div");
//   const $backDiv = document.createElement("div");

//   $frontDiv.classList.add("div-front");
//   $frontDiv.classList.add("div-hidden");
//   $backDiv.classList.add("div-back");
//   $li.classList.add("item-card");
//   $li.appendChild($backDiv);
//   $li.appendChild($frontDiv);
//   $frontDiv.style.backgroundPosition = `${card.position.x}px ${card.position.y}px`;

//   $cardList.appendChild($li);
// });

export default CardList;
