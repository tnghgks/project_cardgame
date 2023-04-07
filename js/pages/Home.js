export default function Home({ $target }) {
  const $page = document.createElement("div");

  $page.className = "Home";
  $page.innerHTML = `<h1>Home</h1>`;

  this.render = () => {
    $target.appendChild($page);
  };
}
