function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choice = (random === 0) ? "rock" : (random === 1) ? "paper" : "scissors";
    console.log(choice);
}

getComputerChoice();