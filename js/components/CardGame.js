class CardGame {
  constructor(난이도) {
    this.level = 난이도;
    this.count = 0;
    this.setup();
  }

  setup() {
    this.totalCard = level * level;
    this.timer();
    this.render();
  }

  timer() {}
  render() {
    // 카드들의 부모요소에 이벤트 리스너(클릭되었을때 flipCard()실행 ) 걸고 버블링을 통해 카드 제어
  }
  flipCard() {}
  gotCard() {}
  replaceCard() {}
  hitScore() {}
  failScore() {}
}
export default CardGame;
