import CardList from "../components/CardList.js";
import ProgressBar from "../components/ProgressBar.js";
import { cardInitCount, limitTime } from "../constant/cardGameConfig.js";
import CardManager from "../lib/service/CardManager.js";

export default function CardGame({ $target, props }) {
  const { level, scoreManager, timerManager } = props;
  this.$previousCard;
  this.matchedCount = 0;

  this.template = () => {
    return `<main class="inGame">
                <div class="progress_container"></div>
                <ul class="list-card ${level}"></ul>
            </main>`;
  };

  this.mount = () => {
    const $progressContainer = $target.querySelector(".progress_container");
    const $listCard = $target.querySelector(".list-card");

    new ProgressBar({
      $target: $progressContainer,
      props: {
        max:
          level === "easy"
            ? limitTime.easy
            : level === "normal"
            ? limitTime.normal
            : limitTime.hard,
        scoreManager,
        timerManager,
      },
    });

    new CardList({
      $target: $listCard,
      props: {
        initCount:
          level === "easy"
            ? cardInitCount.easy
            : level === "normal"
            ? cardInitCount.normal
            : cardInitCount.hard,
        scoreManager,
      },
    });
  };

  this.render = () => {
    $target.innerHTML = this.template();
    this.mount();
  };

  this.setEvent = () => {
    // 카드 클릭 이벤트
    $target.addEventListener("click", async ({ target }) => {
      if (target.className !== "div-back") return;
      const $currentCard = target.closest(".item-card");
      const totalCardCount = $target.querySelectorAll(".item-card").length;
      const cardManager = new CardManager();

      cardManager.cardFlip($currentCard);

      // 이전카드가 있을 시
      if (this.$previousCard) {
        // 클릭한 카드가 이전과 동일한 카드일 시 리턴
        if (this.$previousCard === $currentCard) return;

        // 카드 검증 시 두 카드 이외에 Event Block
        cardManager.disableCardEvent();

        // 이미지 스프라이트로 인한 카드별 background position style 정보 배열화
        const prevCardPosition = cardManager.getCardPosition(this.$previousCard);
        const curCardPosition = cardManager.getCardPosition($currentCard);

        // 각 카드별 포지션 배열 비교
        if (cardManager.compareCard(prevCardPosition, curCardPosition)) {
          // 포지션이 같으면 점수 추가 및 카드 삭제
          cardManager.matchedCard(this.$previousCard, $currentCard);
          scoreManager.addHitScore();
          this.matchedCount += 2;

          //맞춘 카드 개수와 총 개수가 같다면 게임 종료
          if (this.matchedCount === totalCardCount) {
            scoreManager.setWinOrLose(true);
          }
        } else {
          // 포지션이 다르면 카드 원상복구 및 Event Enable
          cardManager.replaceCard(this.$previousCard, $currentCard);
          scoreManager.addFailScore();
        }
        this.$previousCard = null;
      } else {
        this.$previousCard = $currentCard;
      }
    });
  };

  this.setup = () => {
    this.render();
    this.setEvent();
    scoreManager.initScoreData();
  };
}
