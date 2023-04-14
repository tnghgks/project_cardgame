export default function ProgressBar({ $target, props }) {
  const { max, timerManager } = props;

  this.state = { timerId: "", clearTime: "", max, value: max };

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    this.render();
  };

  // 타이머 함수
  this.template = () => {
    const { max, value } = this.state;
    return `<progress class="bar-style" max=${max} value=${value}></progress>`;
  };

  this.render = () => {
    $target.innerHTML = this.template();
  };

  this.setup = () => {
    timerManager.setTimer(this.setState, max);
    this.render();
  };

  this.setup();
}
