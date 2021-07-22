const tiles = document.querySelector(".tiles");
const scores = document.querySelector(".scores");
class createBoard {
  constructor() {}
  renderBoard = (picsArray) => {
    for (let i = 0; picsArray.length > 0; i++) {
      const element = document.createElement("div");
      element.className = "tile played";
      const number = Math.floor(Math.random() * picsArray.length);
      element.style.backgroundImage = `url(${picsArray[number]})`;
      picsArray.splice(number, 1);
      tiles.appendChild(element);
    }
  };
  renderScores = (noPlayers) => {
    scores.classList.remove("hidden");
    for (let i = 1; i <= noPlayers; i++) {
      const element = document.createElement("div");
      if (i == 1) {
        element.classList.add("currentPlayer");
      }
      element.innerHTML = `Player${i}: <span class="score score${i}">0</span>`;
      scores.appendChild(element);
    }
  };
}
