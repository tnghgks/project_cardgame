export default function ScoreManager() {
  let scoreData = {
    winOrLose: false,
    limitTime: 0,
    clearTime: 0,
    hitScore: 0,
    failScore: 0,
  };

  this.getScoreData = () => {
    return { ...scoreData };
  };
  this.initScoreData = () => {
    scoreData = {
      winOrLose: false,
      limitTime: 0,
      clearTime: 0,
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
