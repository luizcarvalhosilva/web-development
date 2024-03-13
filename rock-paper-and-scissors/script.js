const choices = ["rock", "paper", "scissor"];
const playerChoice = document.getElementById("playerChoice");
const machineChoice = document.getElementById("machineChoice");
const gameResult = document.getElementById("gameResult");
const playerScore = document.getElementById("playerScore");
const machineScore = document.getElementById("machineScore");
let personScr = 0;
let machScr = 0;

function playGame(playerDo) {
    const computerDo = choices[Math.floor(Math.random()*3)];
    let result = "";

    if (playerDo === computerDo) {
        result = "EMPATE!";
        playerChoice.textContent = `JOGADOR: ${playerDo}`;
        machineChoice.textContent = `COMPUTADOR: ${computerDo}`;
        gameResult.textContent = result;
        gameResult.classList.remove("setTxtGreen","setTxtRed");
    } else {
        switch (playerDo) {
            case "rock":
                result = (computerDo === "scissor") ? "Você ganhou!" : "Você perdeu!";
                break;
            case "paper":
                result = (computerDo === "rock") ? "Você ganhou!" : "Você perdeu!";
                break;
            case "scissor":
                result = (computerDo === "paper") ? "Você ganhou!" : "Você perdeu!";
                break;
        }

        playerChoice.textContent = `JOGADOR: ${playerDo}`;
        machineChoice.textContent = `COMPUTADOR: ${computerDo}`;
        gameResult.textContent = result;

        gameResult.classList.remove("setTxtGreen","setTxtRed"); 

        switch(result) {
            case "Você ganhou!":
                gameResult.classList.add("setTxtGreen");
                personScr++;
                playerScore.textContent = personScr;
                break;
            case "Você perdeu!":
                gameResult.classList.add("setTxtRed");
                machScr++;
                machineScore.textContent = machScr;
        }
    }
}