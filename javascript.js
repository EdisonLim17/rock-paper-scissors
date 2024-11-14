function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choice = (random === 0) ? "rock" : (random === 1) ? "paper" : "scissors";
    console.log(choice);
}

function getHumanChoice() {
    let choice = "invalid";
    while(choice === "invalid"){
        let input = prompt("Rock (r), Paper (p), or Scissors (s)?")
        choice = (input === "r") ? "rock" : (input === "p") ? "paper" : (input === "s") ? "scissors" : "invalid";
    }
    console.log(choice);
}

getComputerChoice();
getHumanChoice();