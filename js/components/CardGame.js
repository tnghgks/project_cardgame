// html환경에서는 파일을 임포트해올때 .js를 생략하면 안됩니다.
import Component from "../core/Component.js";

class CardGame extends Component {
  constructor($target) {
    super($target);
  }

  template() {
    return ` 
        <article class="arti-level-setting">
          <h2 class="tit-diff-board ir">난이도 설정</h2>
          <button class="btn-easy" type="button" data-level="4">4 X 4</button>
          <button class="btn-midium" type="button" data-level="6">6 X 6</button>
          <button class="btn-hard" type="button" data-level="8">8 X 8</button>


        </article>
        
        <article class="arti-score-board">
        <h2 class="tit-score-board ir">스코어 보드</h2>
        <ul class="list-score-board-content">
          <li>
            종합점수
            <p>총 승리 :</p>
            <p>총 패배 :</p>
          </li>
          <li>
            난이도별 점수
            <p>어려움 (8*8) : 64s</p>
            <p>중간 (6*6) : 54s</p>
            <p>쉬움 (4*4) : 32s</p>
          </li>
          <li>뒤집은 총 횟수 : <span class="txt-total-count">1565</span></li>
          <li>맞은 횟수 : <span class="txt-success-count">15</span></li>
          <li>틀린 횟수 : <span class="txt-wrong-count">155</span></li>
        </ul>
      </article>`;
  }

  handleLevelBtn(event) {
    if (!(event.target.tagName === "BUTTON")) {
      return;
    }

    const title = document.querySelector(".tit-game");

    title.classList.add("ir");
    document.body.style.backgroundImage = "none";

    this.paintCardGame(event.target.dataset.level);
  }

  addEvent() {
    const $article = document.querySelector(".arti-level-setting");
    $article.addEventListener("click", this.handleLevelBtn.bind(this));
  }

  async getData(totalCardCount) {
    const data = await (await fetch("../../json/card.json")).json();

    return data.slice(0, totalCardCount / 2);
  }

  async paintCardGame(level) {
    level = Number(level);

    this.$target.innerHTML = "";
    this.totalCardCount = level * level;
    this.limitTime = level * 10;

    const totalCardData = await this.getData(this.totalCardCount);

    const cardList = document.createElement("ul");
    cardList.classList.add("list-card");

    totalCardData.forEach((card) => {
      const li = document.createElement("li");
      const frontDiv = document.createElement("div");
      const backDiv = document.createElement("div");

      li.classList.add("item-card");
      li.appendChild(backDiv);
      li.appendChild(frontDiv);
      frontDiv.dataset.x = card.position.x;
      frontDiv.dataset.y = card.position.y;

      cardList.appendChild(li);
    });
    this.$target.appendChild(cardList);
  }

  timer() {}
  flipCard() {}
  gotCard() {}
  replaceCard() {}
  hitScore() {}
  failScore() {}
}
export default CardGame;
