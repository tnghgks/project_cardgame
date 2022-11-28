import Component from "../core/Component.js";

class Modal extends Component {
    constructor(limitTime, hitScore, failScore, resetStyle, restart) {
        super(document.querySelector(".root"));
        this.limitTime = limitTime;
        this.hitScore = hitScore;
        this.failScore = failScore;
        this.resetStyle = resetStyle;
        this.restart = restart;
        this.setup();
    }

    render() {
        this.$target.innerHTML += this.template();
    }

    template() {
        return `
        <article class="modal">
        <h2 class="tit-modal">게임종료</h2>
            <p>
                클리어 시간 :
                <span>${this.limitTime}s</span>
            </p>
            <p>
                총 점수 :
                <span>${this.limitTime * this.hitScore}</span>
            </p>
            <p>
                뒤집은 횟수 :
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

    addEvent() {
        // const btnGoMain = document.querySelector(".btn-go-main");
        // const btnReturn = document.querySelector(".btn-return");
        // btnGoMain.addEventListener("click", (event) => {
        //     console.log("메인으로");
        // });
        // btnReturn.addEventListener("click", (event) => {
        //     console.log("재시도");
        // });
    }
}

export default Modal;
