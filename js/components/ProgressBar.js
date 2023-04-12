import { routeChange } from "../lib/utils/router.js";

export default function ProgressBar({ $target, props }) {
  const { max, scoreManager } = props;

  this.state = { timerId: "", clearTime: "", max, value: max };

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
          scoreManager.setScoreData({ hitScore: 30 });
          routeChange("/result");
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

  this.setup = () => {
    // this.timer(props.max);
    this.timer(2); // 테스트용 시간 감축

    this.render();
  };

  this.setup();
}
