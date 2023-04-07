export default function CardGame({ $target, level }) {
  const $page = document.createElement("div");

  $page.className = "CardGame";
  $page.innerHTML = `<h1>${level}</h1>`;

  this.render = () => {
    $target.appendChild($page);
  };
}
