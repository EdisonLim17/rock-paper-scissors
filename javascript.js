let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choice = (random === 0) ? "rock" : (random === 1) ? "paper" : "scissors";
    return choice;
}

function getHumanChoice() {
    let choice = "invalid";
    while(choice === "invalid"){
        let input = prompt("Rock, Paper, or Scissors?").toLowerCase();
        choice = (input === "rock") ? "rock" : (input === "paper") ? "paper" : (input === "scissors") ? "scissors" : "invalid";
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You Win! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
    } else {
        console.log("You Lose! " + computerChoice + " beats " + humanChoice + "!");
        computerScore++;
    }
}

playRound(getHumanChoice(), getComputerChoice());