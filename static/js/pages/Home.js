import { routeChange } from "../lib/utils/router.js";

export default function Home({ $target, props }) {
  const { scoreManager } = props;

  this.state = scoreManager.getScoreData();

  this.template = () => {
    const { winCount, defeatCount, totalFlip, hitScore, failScore } = this.state;
    return `
  <div class="home">
    <h1 class="tit-game">피카츄 카드 게임</h1>
    <main class="main-wrapper">
        <article class="arti-level-setting">
          <h2 class="tit-diff-board ir">난이도 설정</h2>
          <a href="/cardGame/easy" class="btn-style" >4 X 4</a>
          <a href="/cardGame/normal" class="btn-style" >6 X 6</a>
          <a href="/cardGame/hard" class="btn-style" >8 X 8</a>
        </article>

        <article class="arti-score-board">
        <h2 class="tit-score-board ir">스코어 보드</h2>
        <marquee scrolldelay="100" scrollamount="20">
        <strong>종합점수</strong>
        총 승리: ${winCount}
        총 패배: ${defeatCount}/
        <strong>이전 기록</strong>
        뒤집은 총 횟수: ${totalFlip}
        맞은 횟수:${hitScore}
        틀린 횟수:${failScore}
        </marquee>
      </article>
    </main>
    <footer></footer>
  <div>`;
  };

  this.render = () => {
    $target.innerHTML = this.template();
  };

  this.setEvent = () => {
    $target.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.tagName === "A") {
        routeChange(e.target.href);
      }
    });
  };

  this.setup = () => {
    this.render();
    this.setEvent();
  };
}
