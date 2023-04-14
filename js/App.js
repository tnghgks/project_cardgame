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

    if (pathname === "/") {
      new Home({ $target, props: { scoreManager } }).setup();
    } else if (pathname.indexOf("/cardGame/") === 0) {
      const [, , level] = pathname.split("/");
      new CardGame({
        $target,
        props: { level, scoreManager, timerManager },
      }).setup();
    } else if (pathname === "/result") {
      new Result({ $target, props: { scoreManager } }).setup();
    }
  };

  this.setup = () => {
    init(this.route);

    this.route();

    window.addEventListener("popstate", this.route);
  };

  this.setup();
}
