import Component from "../core/Component.js";

class Modal extends Component {
  constructor(score, winLose, restart, goHome) {
    super(document.querySelector(".art-modal"));
    this.score = score;
    this.winLose = winLose;
    this.restart = restart;
    this.goHome = goHome;
    this.setup();
  }

  template() {
    return `<div class="modal">안녕하세요 모달입니다.</div>`;
  }
}

export default Modal;
