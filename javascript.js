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
        return 1;
    } else if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You Win! " + humanChoice + " beats " + computerChoice + "!");
        return 2;
    } else {
        console.log("You Lose! " + computerChoice + " beats " + humanChoice + "!");
        return 0;
    }
}

function playGame() {
    let humanScore = 0, computerScore = 0;
    for(let i = 0; i < 5; i++){
        result = playRound(getHumanChoice(), getComputerChoice());
        if (result === 2) {humanScore++;}
        else if (result === 0) {computerScore++;}
    }
    if (humanScore === computerScore) {console.log("Final Result: Tie!");}
    else if (humanScore > computerScore) {console.log("Final Result: You Win!");}
    else {console.log("Final Result: You Lose.");}
    console.log("Your Final Score: " + humanScore);
    console.log("Computer's Final Score: " + computerScore);
}

playGame();