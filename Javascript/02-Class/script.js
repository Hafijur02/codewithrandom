const playerEl = document.getElementById("player");
const computerEl = document.getElementById("computer");
const resultEl = document.getElementById("result");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");

let playerChoice = "";
let computerChoice = "";

function computerChoose() {
    let randomChoice = Math.floor(Math.random() * 3 + 1);
    switch (randomChoice) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissor";
            break;
    }
    computerEl.innerText = `Computer: ${computerChoice}`;
    determineWinner();
}

function determineWinner() {
    if (playerChoice === computerChoice) {
        resultEl.innerText = "Result: It's a tie!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {
        resultEl.innerText = "Result: You win!";
    } else {
        resultEl.innerText = "Result: You lose!";
    }
}

rockBtn.addEventListener("click", () => {
    playerChoice = "Rock";
    playerEl.innerText = `Player: ${playerChoice}`;
    computerChoose();
});

paperBtn.addEventListener("click", () => {
    playerChoice = "Paper";
    playerEl.innerText = `Player: ${playerChoice}`;
    computerChoose();
});

scissorBtn.addEventListener("click", () => {
    playerChoice = "Scissor";
    playerEl.innerText = `Player: ${playerChoice}`;
    computerChoose();
});
