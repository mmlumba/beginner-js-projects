
document.getElementById("startGame").addEventListener("click", startGameClicked);
document.getElementById("rock").addEventListener("click", rockClicked);
document.getElementById("scissors").addEventListener("click", scissorsClicked);
document.getElementById("paper").addEventListener("click", paperClicked);
const userChoice = document.getElementById("userChoice");

function startGameClicked(){
    console.log("start clicked");
}

function rockClicked(){
    console.log("rock clicked");
    userChoice.innerHTML = "Your choice: ROCK";
}

function scissorsClicked(){
    console.log("scissors clicked");
    userChoice.innerHTML = "Your choice: SCISSOR";
}

function paperClicked(){
    console.log("paper clicked");
    userChoice.innerHTML = "Your choice: PAPER";
}