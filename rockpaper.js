let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // rock, paper, scissors
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}
const drawGame = () => {
    console.log("game was drawn!");
    msg.innerText = "Game Drawn! Play Again";
    msg.style.backgroundColor = "skyblue";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userscorePara.innerText = userScore;
        console.log("Hurray!! you win");
        msg.innerText = `Hurray!! You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log(" you lose");
        msg.innerText = `You Lose!!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }

}

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    //Generate computer choice --> modular
    const compChoice = genCompChoice ();
    console.log("comp Choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();

    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;

        } else if(userChoice === "paper"){
            // scissors, rock
           userWin = compChoice === "scissors" ? false : true;        
        } else { 
            // rock, paper
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice)=> {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});