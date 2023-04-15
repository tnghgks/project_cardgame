import { routeChange } from "../utils/router.js";
import useLocalStorage from "../utils/useLocalStorage.js";

export default function TimerManager(scoreManager) {
  this.scoreManager = scoreManager;
  this.timerId;
  this.clearTime;

  this.setTimer = (setState, limitTime) => {
    this.timerId = setInterval(() => {
      if (!scoreManager.getScoreData().winOrLose) {
        this.clearTime = --limitTime;
        setState({ value: limitTime });

        if (this.isClear()) this.endGame("defeat");
      } else {
        scoreManager.setClearTime(this.clearTime);
        this.endGame("win");
      }
    }, 1000);
  };

  this.endGame = (type) => {
    const { pathname } = location;
    const [, , level] = pathname.split("/");

    if (type === "win") {
      useLocalStorage.addOneToProperty("scoreBoard", "winCount");
    } else if (type === "defeat") {
      useLocalStorage.addOneToProperty("scoreBoard", "defeatCount");
    }
    this.stopTimer();
    routeChange("/result", level);
  };

  this.stopTimer = () => {
    clearInterval(this.timerId);
    this.timerId = null;
  };

  this.isClear = () => {
    return this.clearTime <= 0;
  };
}
