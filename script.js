let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const userSelection = button.className;
        const resultsDiv = document.querySelector('.results');
        resultsDiv.textContent = playRound(userSelection, getComputerChoice());
        const scoreDiv = document.querySelector('.score');
        scoreDiv.textContent = `
            User: ${userScore}
            Computer: ${computerScore}
        `;
        if (checkGameOver()) {
            document.querySelector('.game-over').textContent = displayWinner();
        }

    })
})


//Helper Functions

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

function checkGameOver() {
    if (userScore === 5 || computerScore === 5) {
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.remove();
        })

        return true;
    }
    else {
        return false;
    }
}

function collectAndValidateUserInput() {
    let input = prompt("Rock, paper, or scissors?").toLowerCase();
    let validInput = false;
    while (!validInput) {
        if (input === "rock" || input === "paper" || input === "scissors") {
            validInput = true;
            return input;
        }
        else {
            input = prompt("Rock, paper, or scissors?").toLowerCase();
        }
    }
}

function checkWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        return "You win!"
    }
    else if (computerScore === 5) {
        return "You lose!";
    }
}

function displayWinner() {
    if (userScore > computerScore) {
        return (`
            Game Over
            Congratulations, you win!
        `)
    }
    else if (userScore < computerScore) {
        return (`
            Game Over
            You lose. Better luck next time!
        `)
    }
    else {
        return (`
            Game Over
            It's a draw!
        `)
    }
}
