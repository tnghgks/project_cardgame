export default function ProgressBar({ $target }) {
  this.state = { max: 100, value: 30 };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.template = () => {
    const { max, value } = this.state;
    return `<progress class="bar-style" max=${max} value=${value}></progress>`;
  };

  this.render = () => {
    $target.innerHTML = this.template();
  };

  this.render();
}
