import CardList from "../components/CardList.js";

export default function CardGame({ $target, level }) {
  const $page = document.createElement("div");

  $page.className = "CardGame";

  new CardList({
    $target: $page,
  });

  this.render = () => {
    $target.appendChild($page);
  };
}
