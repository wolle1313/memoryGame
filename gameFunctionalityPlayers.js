class gameFunctionalityPlayers {
  constructor(noPlayers) {
    this.players = noPlayers;
    this.currentPlayer = 1;
    this.playerScore1 = 0;
    this.playerScore2 = 0;
    this.playerScore3 = 0;
    this.playerScore4 = 0;
  }
  finishTurn = (gotPoint) => {
    const scores = document.querySelectorAll(".score");
    if (gotPoint) {
      if (this.currentPlayer === 1) {
        this.playerScore1++;
      }
      if (this.currentPlayer === 2) {
        this.playerScore2++;
      }
      if (this.currentPlayer === 3) {
        this.playerScore3++;
      }
      if (this.currentPlayer === 4) {
        this.playerScore4++;
      }
      scores.forEach((scor) => {
        if (scor.classList.contains(`score1`)) {
          scor.textContent = this.playerScore1;
        } else if (scor.classList.contains(`score2`)) {
          scor.textContent = this.playerScore2;
        } else if (scor.classList.contains(`score3`)) {
          scor.textContent = this.playerScore3;
        } else if (scor.classList.contains(`score4`)) {
          scor.textContent = this.playerScore4;
        }
      });
    } else {
      setTimeout(this.changePlayer, 1000, scores);
    }
  };
  changePlayer = (scores) => {
    this.currentPlayer++;
    if (this.currentPlayer > this.players) {
      this.currentPlayer = 1;
    }
    scores.forEach((score) => {
      if (score.classList.contains(`score${this.currentPlayer}`)) {
        score.parentNode.classList.add("currentPlayer");
      } else {
        score.parentNode.classList.remove("currentPlayer");
      }
    });
  };
}
