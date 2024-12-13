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
    let result = document.createElement("p");
    if (humanChoice === computerChoice) {
        result.textContent = "Tie!";
    } else if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
        result.textContent = "You Win! " + humanChoice + " beats " + computerChoice + "!";
        
        humanScore++;
    } else {
        result.textContent = "You Lose! " + computerChoice + " beats " + humanChoice + "!";

        computerScore++;
    }
    resultDisplay.appendChild(result);
    let score = document.createElement("p");
    score.textContent = "Your Score: " + humanScore + ". Computer's Score: " + computerScore + ".";
    resultDisplay.appendChild(score);
}

let humanScore = 0, computerScore = 0;

const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");

const resultDisplay = document.querySelector(".result-display");

rockButton.addEventListener("click", () => {
    if(humanScore === 0){resultDisplay.textContent = "";}

    playRound("rock", getComputerChoice());

    if(humanScore === 5){
        finalResult = document.createElement("p");
        finalResult.textContent = "Final Result: You Win!";
        resultDisplay.appendChild(finalResult);
        humanScore = 0, computerScore = 0;
    }
    else if(computerScore === 5){
        finalResult = document.createElement("p");
        finalResult.textContent = "Final Result: You Lose.";
        resultDisplay.appendChild(finalResult);
        humanScore = 0, computerScore = 0;
    }
});

paperButton.addEventListener("click", () => {
    if(humanScore === 0){resultDisplay.textContent = "";}

    playRound("paper", getComputerChoice());

    if(humanScore === 5){
        finalResult = document.createElement("p");
        finalResult.textContent = "Final Result: You Win!";
        resultDisplay.appendChild(finalResult);
        humanScore = 0, computerScore = 0;
    }
    else if(computerScore === 5){
        finalResult = document.createElement("p");
        finalResult.textContent = "Final Result: You Lose.";
        resultDisplay.appendChild(finalResult);
        humanScore = 0, computerScore = 0;
    }
});

scissorsButton.addEventListener("click", () => {
    if(humanScore === 0){resultDisplay.textContent = "";}

    playRound("scissors", getComputerChoice());

    if(humanScore === 5){
        finalResult = document.createElement("p");
        finalResult.textContent = "Final Result: You Win!";
        resultDisplay.appendChild(finalResult);
        humanScore = 0, computerScore = 0;
    }
    else if(computerScore === 5){
        finalResult = document.createElement("p");
        finalResult.textContent = "Final Result: You Lose.";
        resultDisplay.appendChild(finalResult);
        humanScore = 0, computerScore = 0;
    }
});