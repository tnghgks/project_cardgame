export default function ProgressBar({ $target, props }) {
  this.state = { timerId: "", clearTime: "", max: props.max, value: props.max };

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    this.render();
  };

  // 타이머 함수
  this.timer = (limitTime) => {
    this.setState({
      timerId: setInterval(() => {
        limitTime--;
        this.setState({ clearTime: limitTime, value: limitTime });

        if (this.state.clearTime <= 0) {
          clearInterval(this.state.timerId);
        }
      }, 1000),
    });
  };

  this.template = () => {
    const { max, value } = this.state;
    return `<progress class="bar-style" max=${max} value=${value}></progress>`;
  };

  this.render = () => {
    $target.innerHTML = this.template();
  };

  this.timer(props.max);

  this.render();
}