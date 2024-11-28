//get id from HTML

const choices = document.querySelector(".choices");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");



const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const result = document.getElementById("result");
const round = document.getElementById("round");




//set game round and score to zero

let gameResult = "" ;
let playerScoreCount = 0;
let computerScoreCount = 0;
let roundCount = 0 ;
result.innerText = gameResult;


//player choice function
function playerChoice(selection) {
    const computerSelection = getComputerChoice();
    const winner = game(selection, computerSelection)
    result.textContent = `You Choose ${selection}. Computer Choose ${computerSelection}.`
}

//player choices by click

function userChoices (playerSelection){

    rock.addEventListener("click", ()=>{ roundSystem.call(rock); }
    )

    paper.addEventListener("click", ()=>{ roundSystem.call(paper); }
        )

    scissors.addEventListener("click", ()=>{ roundSystem.call(scissors); }
            )
}



//computer choices

function getComputerChoice() {

    let rps = ["rock" , "paper" , "scissors"] ;
    let random = rps[Math.floor(Math.random()* rps.length)]

    return random;

}


// game logic

function game (playerSelection, computerSelection) {
     
    if (playerSelection=== computerSelection){

        return "It's a tie! " ;
    }
 
    else if ( (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
             (playerSelection === "scissors" && computerSelection === "paper")){
       return "You Win!" ;
    }
    else{
       return "You Lose!" ;
    }
}


//round and score system

function roundSystem() {
    const playerChoice = this.id;
    const computerSelection = getComputerChoice();
    const winner = game (playerChoice, computerSelection);


    if (winner === "You Win!"){
        playerScoreCount++
    }
    else if (winner === "You Lose!"){
        computerScoreCount++    }

    roundCount++


    playerScore.textContent = `Player: ${playerScoreCount}` ;
    computerScore.textContent = `Computer: ${computerScoreCount}` ;
    round.textContent = ` Round: ${ roundCount}` ;
    result.textContent = ` You choose ${playerChoice}. Computer chooses ${ computerSelection}` ;


    if (roundCount === 5){
        declareWinner();
        resetScore();
        resetRound();
    }

}

//round and score reset

function resetScore(){
    playerScoreCount = 0;
    computerScoreCount = 0;
}

function resetRound(){
    roundCount = 0;
}


//winner

function declareWinner(){

    if (playerScoreCount > computerScoreCount){
        result.textContent = "You win. Try winning in life too."
    }
    
    else if (playerScoreCount < computerScoreCount){
        result.textContent = "You are such a loser."
    }

    else{
        result.textContent = "It's a tie. Try harder bitch. "
    }

}


userChoices();