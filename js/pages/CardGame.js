import CardList from "../components/CardList.js";
import ProgressBar from "../components/ProgressBar.js";

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
    });

    new CardList({
      $target: $listCard,
    });
  };

  this.render = () => {
    $target.innerHTML = this.template();
    this.mount();
  };

  this.render();
}
