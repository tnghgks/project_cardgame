import CardGame from "./pages/CardGame.js";
import Home from "./pages/Home.js";
import Result from "./pages/Result.js";
import { init } from "./lib/utils/router.js";
import ScoreManager from "./lib/service/ScoreManager.js";

export default function App({ $target }) {
  const scoreManager = new ScoreManager();

  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    if (pathname === "/") {
      new Home({ $target }).setup();
    } else if (pathname.indexOf("/cardGame/") === 0) {
      const [, , level] = pathname.split("/");
      new CardGame({
        $target,
        props: { level, scoreManager },
      }).setup();
    } else if (pathname === "/result") {
      new Result({ $target, props: { scoreManager } }).setup();
    }
  };

  init(this.route);

  this.route();

  window.addEventListener("popstate", this.route);
}
