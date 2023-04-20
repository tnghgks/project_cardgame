import useLocalStorage from "../utils/useLocalStorage.js";

export default function ScoreManager() {
  let scoreData = {
    winOrLose: false,
    limitTime: 0,
    clearTime: 0,
    totalFlip: 0,
    hitScore: 0,
    failScore: 0,
    winCount: 0,
    defeatCount: 0,
  };

  this.getScoreByLocalStorage = () => {
    let prevScoreData = useLocalStorage.getItem("scoreBoard");
    if (!prevScoreData) {
      prevScoreData = {
        winCount: 0,
        defeatCount: 0,
      };
      useLocalStorage.setItem("scoreBoard", prevScoreData);
    }
    scoreData = { ...scoreData, ...prevScoreData };
  };

  this.getScoreData = () => {
    this.getScoreByLocalStorage();
    return { ...scoreData };
  };
  this.initScoreData = () => {
    scoreData = {
      winOrLose: false,
      limitTime: 0,
      clearTime: 0,
      totalFlip: 0,
      hitScore: 0,
      failScore: 0,
    };
  };

  this.addHitScore = () => {
    scoreData = { ...scoreData, hitScore: scoreData.hitScore + 1 };
  };

  this.addFailScore = () => {
    scoreData = { ...scoreData, failScore: scoreData.failScore + 1 };
  };

  this.addTotalFlip = () => {
    scoreData = { ...scoreData, totalFlip: scoreData.totalFlip + 1 };
  };

  this.setClearTime = (clearTime) => {
    scoreData = { ...scoreData, clearTime };
  };

  this.setWinOrLose = (winOrLose) => {
    scoreData = { ...scoreData, winOrLose };
  };

  this.setLimitTime = (limitTime) => {
    scoreData = { ...scoreData, limitTime };
  };
}
