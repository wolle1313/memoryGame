const boardSize = document.querySelectorAll(".boardS");
const players = document.querySelectorAll(".noPlayers");

function checkboxCheck(checks) {
  if (this.checked) {
    checks.forEach((checkin) => {
      checkin.checked = false;
    });
    this.checked = true;
  } else {
    this.checked = true;
  }
}

boardSize.forEach((check) => {
  check.addEventListener("click", function () {
    checkboxCheck.call(check, boardSize);
  });
});
players.forEach((check) => {
  check.addEventListener("click", function () {
    checkboxCheck.call(check, players);
  });
});
