function computerMove() {
  let moves = ["rock", "paper", "scissors"];

  return moves[Math.floor(Math.random()*moves.length)];
}

function resultText(result, playerChoice, computerChoice) {
  if (result == true) {
    return "You win! " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + " beats " + computerChoice + "!";
  } else if (result == false) {
    return "You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + playerChoice + "!";
  }
}

function playRound() {
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

  let computerChoice = computerMove();

  if (playerChoice == computerChoice) {
    return "It's a draw! You both chose " + playerChoice + ".";
  } else if (playerChoice == "rock") {
    if (computerChoice == "paper") {
      return resultText(false, playerChoice, computerChoice);
    } else if (computerChoice == "scissors") {
      return resultText(true, playerChoice, computerChoice);
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "scissors") {
      return resultText(false, playerChoice, computerChoice);
    } else if (computerChoice == "rock") {
      return resultText(true, playerChoice, computerChoice);
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "rock") {
      return resultText(false, playerChoice, computerChoice);
    } else if (computerChoice == "paper") {
      return resultText(true, playerChoice, computerChoice);
    }
  }
}

function game(rounds = 5) {
  for (iterator = 0; iterator < rounds; iterator++) {
    console.log(playRound());
  }
}