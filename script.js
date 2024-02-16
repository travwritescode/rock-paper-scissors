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
        computerScore++;
        return "You lose! Paper beats rock."
    }
    else if (userSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper."
    }
    else if (userSelection === "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lose! Rock beats scissors."
    }
    else {
        userScore++;
        return `You win! ${userSelection} beats ${computerSelection}!`
    }
}

function playGame() {
    let round = 1;
    while (round <= 5) {
        let userChoice = prompt("Rock, paper, or scissors?").toLowerCase();
        console.log(playRound(userChoice, getComputerChoice()));
        round++;
    }
    if (userScore > computerScore) {
        console.log(`
            User: ${userScore}
            Computer: ${computerScore}
            Congratulations, you win!
        `)
    }
    else if (userScore < computerScore) {
        console.log(`
            User: ${userScore}
            Computer: ${computerScore}
            You lose. Better luck next time!
        `)
    }
    else {
        console.log(`
            User: ${userScore}
            Computer: ${computerScore}
            It's a draw!
        `)
    }
}

let userScore = 0;
let computerScore = 0;

playGame()