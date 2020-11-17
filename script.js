let replaceSpan = document.getElementById("replace");
let deleteIfNoID = document.getElementById("deleteIfNoID");
let browser = function(){
  var ua= navigator.userAgent, tem,
  M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
      tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE '+(tem[1] || '');
  }
  if(M[1]=== 'Chrome'){
      tem= ua.match(/\b(OPR|Edge?)\/(\d+)/);
      if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera').replace('Edg ', 'Edge ');            
  }
  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
  return M.join(' ');
}();

let controlKey = "Control"
let altKey = "Shift"
if (navigator.userAgent.indexOf("Mac") != -1) {
  controlKey = "Command"
  altKey = "Option"
}

if (browser.includes("Chrome") || browser.includes("Edge")) {
  replaceSpan.textContent = `${controlKey} + ${altKey} + J`;
} else if (browser.includes("Firefox")) {
  replaceSpan.textContent = `${controlKey} + ${altKey} + K`;
} else if (browser.includes("Safari")) {
  replaceSpan.textContent = `${controlKey} + ${altKey} + C`;
} else {
  deleteIfNoID.textContent = "";
}

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