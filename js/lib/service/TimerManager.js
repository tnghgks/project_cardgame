import { routeChange } from "../utils/router.js";

export default function TimerManager(scoreManager) {
  this.scoreManager = scoreManager;
  this.timerId;
  this.clearTime;

  this.setTimer = (setState, limitTime) => {
    this.timerId = setInterval(() => {
      if (!scoreManager.getScoreData().winOrLose) {
        this.clearTime = --limitTime;
        setState({ value: limitTime });

        if (this.isClear()) this.endGame();
      } else {
        scoreManager.setClearTime(this.clearTime);
        this.endGame();
      }
    }, 1000);
  };

  this.endGame = () => {
    this.stopTimer();
    routeChange("/result");
  };

  this.stopTimer = () => {
    clearInterval(this.timerId);
    this.timerId = null;
  };

  this.isClear = () => {
    return this.clearTime <= 0;
  };
}
