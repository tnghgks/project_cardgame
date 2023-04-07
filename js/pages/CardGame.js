export default function CardGame({ $target }) {
  const $page = document.createElement("div");

  $page.className = "CardGame";
  $page.innerHTML = "<h1>CardGame</h1>";

  this.render = () => {
    $target.appendChild($page);
  };
}
