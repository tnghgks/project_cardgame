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
        return `
          <article class="modal">게임 종료</article>
            

        `;
    }
}

export default Modal;
