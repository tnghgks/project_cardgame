import Component from "../core/Component.js";

class Modal extends Component {
    constructor(score, winLose, resetStyle, restart) {
        super(document.querySelector(".art-modal"));
        this.score = score;
        this.winLose = winLose;
        this.resetStyle = resetStyle;
        this.restart = restart;
        this.setup();
    }

    template() {
        return `
        <article class="modal">
        <h2 class="tit-modal">게임종료</h2>
            <p>
                클리어 시간 :
                <span>40s</span>
            </p>
            <p>
                총 점수 :
                <span>10</span>
            </p>
            <p>
                뒤집은 횟수 :
                <span>15</span>
            </p>
            <p>
                틀린 횟수 :
                <span>4</span>
            </p>
            <button class="btn-go-main btn-style">메인으로</button>
            <button class="btn-return btn-style">재시도</button>
        </article>
        `;
    }
    // render() {
    //     this.document.querySelector(".art-modal").innerHTML += this.template();
    // }

    addEvent() {
        const btnGoMain = document.querySelector(".btn-go-main");
        const btnReturn = document.querySelector(".btn-return");

        btnGoMain.addEventListener("click", (event) => {
            console.log("메인으로");
        });
        btnReturn.addEventListener("click", (event) => {
            console.log("재시도");
        });
    }
}

export default Modal;
