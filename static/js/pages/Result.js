import { routeChange } from "../lib/utils/router.js";

export default function Result({ $target, props }) {
  const { scoreManager } = props;

  this.state = scoreManager.getScoreData();

  this.template = () => {
    const { winOrLose, clearTime, hitScore, failScore } = this.state;
    return `
        <main class="home">
        <article class="modal">
        <h2 class="tit-modal">게임종료</h2>
        ${
          winOrLose
            ? `<p>남은 시간 :<span>${clearTime}s</span></p>`
            : `<p><span> 타임아웃 ! </span></p>`
        }
            <p>
                총 점수 :
                <span>${clearTime * 5 + hitScore * 10}</span>
            </p>
            <p>
                맞춘 횟수 :
                <span>${hitScore}</span>
            </p>
            <p>
                틀린 횟수 :
                <span>${failScore}</span>
            </p>
            <button class="btn-go-main btn-style">메인으로</button>
            <button class="btn-return btn-style">재시도</button>
        </article>
        </main>
        `;
  };

  this.render = () => {
    $target.innerHTML = this.template();
  };

  this.setEvent = () => {
    $target.addEventListener("click", ({ target }) => {
      if (target.classList.contains("btn-go-main")) {
        routeChange("/");
      }
      if (target.classList.contains("btn-return")) {
        routeChange(`/cardGame/${history.state.data}`);
      }
    });
  };

  this.setup = () => {
    this.render();
    this.setEvent();
  };
}
