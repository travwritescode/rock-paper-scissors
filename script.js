console.log(getComputerChoice())

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;

    console.log(rand);

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