import CardList from "../components/CardList.js";
import ProgressBar from "../components/ProgressBar.js";
import { cardInitCount, limitTime } from "../constant/cardGameConfig.js";

export default function CardGame({ $target, level }) {
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
      },
    });
  };

  this.render = () => {
    $target.innerHTML = this.template();
    this.mount();
  };

  this.render();
}
