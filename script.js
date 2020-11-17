function computerMove() {
  let moves = ["rock", "paper", "scissors"];

  return moves[Math.floor(Math.random()*moves.length)];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == "rock") {
    if (computerChoice == "paper") {
      return false;
    } else if (computerChoice == "scissors") {
      return true;
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "scissors") {
      return false;
    } else if (computerChoice == "rock") {
      return true;
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "rock") {
      return false;
    } else if (computerChoice == "paper") {
      return true;
    }
  }
}

// TODO: Occasionally this function does not work, and just returns "undefined" to the console. Unsure why
// seems to be most common when player makes the same choice twice in a row
// problem goes away entirely when I uncomment the console.log() commands
function play() {
  let playerChoiceMade = false;
  let playerChoice = "";
  let promptText = "What is your move?"
  while (playerChoiceMade == false) {
    playerChoice = prompt(promptText).toLowerCase()

    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
      playerChoiceMade = true;
    } else {
      promptText = "Sorry, that's not a valid option. Please choose rock, paper, or scissors!"
    }
  }
  //console.log("Player chose " + playerChoice);

  let computerChoice = computerMove();
  //console.log("Computer chose " + computerChoice);

  let result = playRound(playerChoice, computerChoice);
  //console.log("Result is " + result);

  if (result == true) {
    console.log("You win! " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + " beats " + computerChoice + "!");
  } else if (result == false) {
    console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + playerChoice + "!");
  }
}