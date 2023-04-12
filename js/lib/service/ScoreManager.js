export default function ScoreManager() {
  this.scoreData = {
    winOrLose: 0,
    limitTime: 0,
    clearTime: 0,
    hitScore: 0,
    failScore: 0,
  };

  this.getScoreData = () => {
    return { ...this.scoreData };
  };

  this.setScoreData = (scoreData) => {
    this.scoreData = { ...this.scoreData, ...scoreData };
  };
}
