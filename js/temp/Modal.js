import Component from "../core/Component.js";

class Modal extends Component {
  constructor(limitTime, clearTime, winOrLose, hitScore, failScore) {
    super(document.querySelector(".root"));
    this.winOrLose = winOrLose;
    this.limitTime = limitTime;
    this.hitScore = hitScore;
    this.failScore = failScore;
    this.clearTime = clearTime;
    this.setup();
  }

  render() {
    this.$target.innerHTML += this.template();
  }

  template() {
    return `
        <article class="modal">
        <h2 class="tit-modal">게임종료</h2>
        ${this.winOrLose ? `<p>클리어 시간 :<span>${this.limitTime - this.clearTime}s</span></p>` : `<p><span> 타임아웃 ! </span></p>`}
            <p>
                총 점수 :
                <span>${this.clearTime * 5 + this.hitScore * 10}</span>
            </p>
            <p>
                맞춘 횟수 :
                <span>${this.hitScore}</span>
            </p>
            <p>
                틀린 횟수 :
                <span>${this.failScore}</span>
            </p>
            <button class="btn-go-main btn-style">메인으로</button>
            <button class="btn-return btn-style">재시도</button>
        </article>
        `;
  }
}

export default Modal;
