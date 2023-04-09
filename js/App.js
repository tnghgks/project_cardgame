import CardGame from "./pages/CardGame.js";
import Home from "./pages/Home.js";
import { init } from "./lib/utils/router.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    if (pathname === "/") {
      new Home({ $target });
    } else if (pathname.indexOf("/cardGame/") === 0) {
      const [, , level] = pathname.split("/");
      new CardGame({ $target, level });
    }
  };

  init(this.route);

  this.route();

  window.addEventListener("popstate", this.route);
}
