import Home from "./pages/Home.js";
import { init } from "./utils/router.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    if (pathname === "/") {
      new Home({ $target }).render();
    } else if (pathname === "/cardGame") {
      new Home({ $target }).render();
    }
  };

  init(this.route);

  this.route();
}
