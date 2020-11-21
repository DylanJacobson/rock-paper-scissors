const resultDisplay = document.getElementById("results");
const scoreDisplay = document.getElementById("score");
const buttons = document.querySelectorAll("button");
let gameScore = {
  player: 0,
  computer: 0,
  draw: 0,
};


const reloadLink = document.createElement('a');
reloadLink.textContent = "Play again?";
reloadLink.addEventListener('click', function () {
  location.reload();
});

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function () {
    playRound(this.id);
  });
});

function playRound(playerChoice) {
  const computerChoice = computerChoiceMaker();

  const roundResult = compareChoices(playerChoice, computerChoice);

  if (roundResult === 'player') {
    gameScore.player++;
  } else if (roundResult === 'computer') {
    gameScore.computer++;
  } else {
    gameScore.draw++;
  }

  if (gameScore.player >= 5) {
    endGame("player");
  } else if (gameScore.computer >= 5) {
    endGame("computer");
  } else {
    renderRound(roundResult);
  }
}

function computerChoiceMaker() {
  let moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random()*moves.length)];
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "draw";

  if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return "player"; 
      } else {
        return "computer";
      }
}

function renderRound(roundResult) {
  if (roundResult === "draw") {
    resultDisplay.textContent = "It's a draw!"
  } else {
    resultDisplay.textContent = `The ${roundResult} has won this round!`;
  }
  updateScoreDisplay();
}

function updateScoreDisplay() {
  scoreDisplay.textContent = `Player: ${gameScore.player} - Computer: ${gameScore.computer} - Draws: ${gameScore.draw}`
}

function endGame(champion) {
  resultDisplay.textContent = `The ${champion} has won 5 rounds, they are the champion! `
  resultDisplay.appendChild(reloadLink);

  updateScoreDisplay();

  document.querySelectorAll('button').forEach(button => {
    button.disabled = true;
  });
}