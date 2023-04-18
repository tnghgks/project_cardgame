import CardGame from "./pages/CardGame.js";
import Home from "./pages/Home.js";
import Result from "./pages/Result.js";
import { init } from "./lib/utils/router.js";
import ScoreManager from "./lib/service/ScoreManager.js";
import TimerManager from "./lib/service/TimerManager.js";

export default function App({ $target }) {
  const scoreManager = new ScoreManager();
  const timerManager = new TimerManager(scoreManager);

  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    const $page = document.createElement("div");
    $page.className = "page";
    $target.appendChild($page);

    if (pathname === "/") {
      new Home({ $target: $page, props: { scoreManager } }).setup();
    } else if (pathname.indexOf("/cardGame/") === 0) {
      const [, , level] = pathname.split("/");

      new CardGame({
        $target: $page,
        props: { level, scoreManager, timerManager },
      }).setup();
    } else if (pathname === "/result") {
      new Result({ $target: $page, props: { scoreManager } }).setup();
    }
  };

  this.setup = () => {
    init(this.route);

    this.route();
    scoreManager.getScoreByLocalStorage();

    window.addEventListener("popstate", () => {
      timerManager.stopTimer();
      this.route();
    });
  };

  this.setup();
}
