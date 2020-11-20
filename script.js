const resultsDisplay = document.getElementById("results");
const buttons = document.querySelectorAll("button");
let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;

const reloadLink = document.createElement('a');
reloadLink.textContent = "Play again?";
reloadLink.addEventListener('click', function () {
  location.reload();
});

let replaceSpan = document.getElementById("replace");
function computerMove() {
  let moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random()*moves.length)];
}

function resultText(result, playerChoice, computerChoice) {
  if (result == true) {
    return "You win this round, " + playerChoice + " beats " + computerChoice + "!";
  } else if (result == false) {
    return "You lose this round, " + computerChoice + " beats " + playerChoice + "!";
  }
}

function playRound(playerChoice) {
  let computerChoice = computerMove();
  playerChoice = playerChoice.toLowerCase();
  if (playerChoice === computerChoice) return "It's a draw! You both chose " + playerChoice + ".";

  if (playerChoice === 'rock' && computerChoice === 'scissors' ||
      playerChoice === 'paper' && computerChoice === 'rock' ||
      playerChoice === 'scissors' && computerChoice === 'paper') {
        gamesWon += 1;
        return resultText(true, playerChoice, computerChoice); 
      } else {
        gamesLost += 1;
        return resultText(false, playerChoice, computerChoice);
      }
}

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (event) {
    gamesPlayed += 1;
    let result = playRound(this.textContent);
    if (gamesWon < 5 && gamesLost < 5) {
      resultsDisplay.textContent = result + " You've won " + gamesWon + " out of " + gamesPlayed + " games!";
    } else if (gamesWon >= 5) {
      resultsDisplay.textContent = result + " You've won 5 games, you're the champion! ";
      resultsDisplay.appendChild(reloadLink);
      document.querySelectorAll('button').forEach(button => {
        button.disabled = true;
      });
    } else if (gamesLost >= 5) {
      resultsDisplay.textContent = result + " I've won 5 games, I'm the champion! ";
      resultsDisplay.appendChild(reloadLink);
      document.querySelectorAll('button').forEach(button => {
        button.disabled = true;
      });
    }
  });
}