import CardGame from "./pages/CardGame.js";
import Home from "./pages/Home.js";
import { init } from "./utils/router.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    if (pathname === "/") {
      new Home({ $target }).render();
    } else if (pathname.indexOf("/cardGame/") === 0) {
      const [, , level] = pathname.split("/");
      new CardGame({ $target, level }).render();
    }
  };

  init(this.route);

  this.route();
}
