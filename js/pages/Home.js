import { routeChange } from "../lib/utils/router.js";

export default function Home({ $target }) {
  const $page = document.createElement("div");

  $page.className = "Home";
  $page.innerHTML = `<h1 class="tit-game">피카츄 카드 게임</h1>
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
      총 승리:
      총 패배: /
      <strong>이전 기록</strong>
      뒤집은 총 횟수:
      맞은 횟수:
      틀린 횟수:
      </marquee>
    </article>
  </main>
  <footer></footer>`;

  $page.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "A") {
      routeChange(e.target.href, e.target.dataset.level);
    }
  });

  this.render = () => {
    $target.appendChild($page);
  };

  this.setup = () => {
    this.render();
  };
}
