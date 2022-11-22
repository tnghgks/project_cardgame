// html환경에서는 파일을 임포트해올때 .js를 생략하면 안됩니다.
import Component from '../core/Component.js';

class CardGame extends Component {
    constructor($target) {
        super($target);
        this.clickCount = 0;
    }

    template() {
        return ` 
        <article class="arti-level-setting">
          <h2 class="tit-diff-board ir">난이도 설정</h2>
          <button class="btn-easy" type="button" data-level="4">4 X 4</button>
          <button class="btn-midium" type="button" data-level="6">6 X 6</button>
          <button class="btn-hard" type="button" data-level="8">8 X 8</button>


        </article>
        
        <article class="arti-score-board">
        <h2 class="tit-score-board ir">스코어 보드</h2>
        <ul class="list-score-board-content">
          <li>
            종합점수
            <p>총 승리 :</p>
            <p>총 패배 :</p>
          </li>
          <li>
            난이도별 점수
            <p>어려움 (8*8) : 64s</p>
            <p>중간 (6*6) : 54s</p>
            <p>쉬움 (4*4) : 32s</p>
          </li>
          <li>뒤집은 총 횟수 : <span class="txt-total-count">1565</span></li>
          <li>맞은 횟수 : <span class="txt-success-count">15</span></li>
          <li>틀린 횟수 : <span class="txt-wrong-count">155</span></li>
        </ul>
      </article>`;
    }

    handleLevelBtn(event) {
        if (!(event.target.tagName === 'BUTTON')) {
            return;
        }

        const title = document.querySelector('.tit-game');

        title.classList.add('ir');
        document.body.style.backgroundImage = 'none';

        this.paintCardGame(event.target.dataset.level);
    }

    addEvent() {
        const $article = document.querySelector('.arti-level-setting');

        $article.addEventListener('click', this.handleLevelBtn.bind(this));
    }

    async getData(totalCardCount) {
        const data = await (await fetch('../../json/card.json')).json();

        return data.slice(0, totalCardCount / 2);
    }

    async paintCardGame(level) {
        level = Number(level);

        this.$target.innerHTML = '';
        this.totalCardCount = level * level;
        this.limitTime = level * 10;

        const cardData = await this.getData(this.totalCardCount); // 카드가 반밖에 없음

        // 모든 카드 렌더링
        const totalCardData = cardData.concat(cardData);

        // 카드 섞기 (sort함수의 리턴값이 음수면 앞으로 양수면 뒤로 갈껍니다)
        totalCardData.sort((a, b) => Math.random() - 0.5);

        const $cardList = document.createElement('ul');
        $cardList.classList.add('list-card');

        totalCardData.forEach((card) => {
            const $li = document.createElement('li');
            const $frontDiv = document.createElement('div');
            const $backDiv = document.createElement('div');

            $frontDiv.classList.add('div-front');
            $frontDiv.classList.add('div-hidden');
            $backDiv.classList.add('div-back');
            $li.classList.add('item-card');
            $li.appendChild($backDiv);
            $li.appendChild($frontDiv);
            $frontDiv.style.backgroundPosition = `${card.position.x}px ${card.position.y}px`;

            $cardList.appendChild($li);
        });
        this.$target.appendChild($cardList);

        const $listCard = document.querySelector('.list-card');
        $listCard.addEventListener('click', this.flipCard.bind(this));
    }

    timer() {}

    flipCard(event) {
        if (!(event.target.className === 'div-back')) {
            return;
        }

        console.log(this.clickCount);

        this.clickCount += 1;

        const $back = event.target;
        const $front = $back.nextSibling;
        $back.classList.add('div-hidden');
        $front.classList.remove('div-hidden');

        if (this.clickCount >= 2) {
            const $backDiv = document.querySelectorAll('.div-back');
            $backDiv.forEach((item) => {
                item.style.pointerEvents = 'none';
            });
            setTimeout(() => {
                this.replaceCard();
            }, 800);
            this.clickCount = 0;
            //if 맞으면 this.gotCard(); hitScore()
            //틀리면 failScore()
            return;
        }

        // 카드 카운트가 2가 되면 모든 카드 다시 뒤집기
    }
    gotCard() {} // 비교해서 맞는거 할라면 data-x , data-y 비교해서 같으면 Got
    replaceCard() {
        const $backDiv = document.querySelectorAll('.div-back');
        const $frontDiv = document.querySelectorAll('.div-front');
        $frontDiv.forEach((item) => {
            item.classList.add('div-hidden');
        });
        $backDiv.forEach((item) => {
            item.classList.remove('div-hidden');
            item.style.pointerEvents = 'auto';
        });
    }
    hitScore() {}
    failScore() {}
}
export default CardGame;
