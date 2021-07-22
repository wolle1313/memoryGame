const endgame = document.querySelector(".endgame");
const result = document.querySelector(".result");
class gameFunctionality {
  constructor(noPlayers) {
    this.checking = [];
    this.tileFlag = true;
    this.noPlayers = noPlayers;
    this.gameFunPlayers = new gameFunctionalityPlayers(this.noPlayers);
    this.clickTile = (allTiles) => {
      allTiles.forEach((tile) => {
        tile.addEventListener("click", this.tileClickHandle.bind(this, tile));
      });
    };

    this.gameEnd = () => {
      const scoresArr = [
        this.gameFunPlayers.playerScore2,
        this.gameFunPlayers.playerScore3,
        this.gameFunPlayers.playerScore4,
      ];
      let maxScore = [this.gameFunPlayers.playerScore1, "Player1"];
      scoresArr.forEach((score, index) => {
        if (score > maxScore[0]) {
          maxScore = [score, `Player${index + 2}`];
        } else if (score == maxScore[0]) {
          maxScore.push(`Player${index + 2}`);
        }
      });
      if (maxScore.length == 2) {
        result.textContent = `${maxScore[1]} wins!`;
      } else if (maxScore.length > 2) {
        maxScore.shift();
        maxScore.forEach((el, index) => {
          if (index + 1 == maxScore.length) {
            result.textContent += `${el} tie`;
          } else {
            result.textContent += `${el} and `;
          }
        });
      }
      endgame.classList.remove("hidden");
    };

    this.checkAnimationEnd = () => {
      this.checking.forEach((el) => {
        el.classList.add("vanish");
        el.classList.remove("correct");
      });
      document.querySelectorAll(".played").forEach((tile) => {
        tile.classList.remove("invisible");
      });
      this.checking = [];
      this.tileFlag = true;
      if (document.querySelectorAll(".played").length == 0) {
        this.gameEnd();
      }
    };

    this.matchCheck = () => {
      if (this.checking.length === 2) {
        this.tileFlag = false;
        if (
          this.checking[0].style.backgroundImage ==
          this.checking[1].style.backgroundImage
        ) {
          this.checking[0].classList.add("correct");
          this.checking[1].classList.add("correct");
          this.gameFunPlayers.finishTurn(true);
        } else {
          this.checking.forEach((el) => {
            el.classList.add("played");
          });
          this.checking = [];
          this.gameFunPlayers.finishTurn(false);
        }
        setTimeout(this.checkAnimationEnd, 1000);
      }
    };
  }

  tileClickHandle(tile) {
    if (this.tileFlag && tile.classList.contains("played")) {
      this.checking.push(tile);
      tile.classList.add("invisible");
      tile.classList.remove("played");
      this.matchCheck();
    }
  }
}
