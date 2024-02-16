function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;

    let computerChoice;
    switch (rand) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }

    return computerChoice;
}

function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "Tie! You both chose " + userSelection + "!"
    }
    else if (userSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock."
    }
    else if (userSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper."
    }
    else if (userSelection === "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors."
    }
    else {
        return `You win! ${userSelection} beats ${computerSelection}!`
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));