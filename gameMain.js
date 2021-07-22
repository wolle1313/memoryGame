const motherDiv = document.querySelector(".game");
const mode = document.querySelector(".mode");
const btnStart = document.querySelector(".gameStart");
const btnReset = document.querySelector(".gameFinish");
let mainer;
class main {
  constructor(noPictures, noPlayers) {
    this.noPictures = noPictures;
    this.noPlayers = noPlayers;
    this.cardsRollin = new cardsRoll();
    this.creatingBoard = new createBoard();
    this.gameFunctions = new gameFunctionality(this.noPlayers);
  }
  render() {
    mode.classList.add("hidden");
    tiles.classList.remove("hidden");
    const pics = this.cardsRollin.rollPictures(this.noPictures);
    this.creatingBoard.renderBoard(pics);
    this.creatingBoard.renderScores(this.noPlayers);
    this.gameFunctions.clickTile(document.querySelectorAll(".played"));
  }
}

btnStart.addEventListener("click", function () {
  let noPictures, noPlayers;
  boardSize.forEach((checkb) => {
    if (checkb.checked) {
      if (checkb.classList.contains("small")) {
        noPictures = 8;
        tiles.style.width = "440px";
      }
      if (checkb.classList.contains("medium")) {
        noPictures = 12;
        tiles.style.width = "660px";
      }
      if (checkb.classList.contains("big")) {
        noPictures = 18;
        tiles.style.width = "990px";
      }
    }
  });
  players.forEach((checkp) => {
    if (checkp.checked) {
      if (checkp.classList.contains("player2")) {
        noPlayers = 2;
      }
      if (checkp.classList.contains("player3")) {
        noPlayers = 3;
      }
      if (checkp.classList.contains("player4")) {
        noPlayers = 4;
      }
    }
  });
  mainer = new main(noPictures, noPlayers);
  mainer.render();
});

btnReset.addEventListener("click", function () {
  mainer = null;
  tiles.classList.add("hidden");
  scores.classList.add("hidden");
  endgame.classList.add("hidden");
  mode.classList.remove("hidden");
  tiles.innerHTML = "";
  scores.innerHTML = "";
  result.textContent = "";
});
