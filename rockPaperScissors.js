
function getPcChoice(){
 
    let choice = Math.floor(Math.random()*3);

    let c;
    switch (choice) {
        case 0:
                c = "rock";
                break;
        case 1:
            c = "scissors";
            break;
        case 2:
            c = "paper";
            break;
        default:
            break;
    }

return c;

}




function playRound(humanChoice, pcChoice) {
    
    if (
        (humanChoice === "rock" && pcChoice === "scissors") ||
        (humanChoice === "scissors" && pcChoice === "paper") ||
        (humanChoice === "paper" && pcChoice === "rock")
    ) {
        humanScore++;
        console.log(`You won! ${humanChoice} beats ${pcChoice}`);
    } else if (humanChoice === pcChoice) {
        console.log("It's a draw!");
    } else {
        pcScore++;
        console.log(`You lost! ${pcChoice} beats ${humanChoice}`);
   
    }
    
}

let pcScore = 0;
let humanScore = 0; 




function playGame() {
    
    
// 5 juegos en total
/*     for(let game=0; game<=5; game++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getPcChoice();
        playRound(humanSelection,computerSelection);
    }
     */

    //Metodo para que solo termine cuando uno de los 2 tenga 5 puntos
    let btnRoca = document.querySelector('#btnRock');

    btnRoca.addEventListener("click", playRound(document.getElementById("btnRock").value,getPcChoice()));
    
    let btnPaper = document.querySelector('#btnPaper');
    
    btnPaper.addEventListener("click", playRound(document.getElementById("btnPaper").value,getPcChoice()));
    
    let btnScissors = document.querySelector('#btnScissors');
    
    btnScissors.addEventListener("click", playRound(document.getElementById("btnScissors").value,getPcChoice()));

  
    
    if (pcScore > humanScore) {

        console.log("Results: Pc wins!");
        console.log(pcScore);
        console.log(humanScore);
    }else if(pcScore < humanScore){
        console.log("Results: Human wins!");
        console.log(pcScore);
        console.log(humanScore);
    }else{
        console.log("Results: It´s a draw!");
        console.log(pcScore);
        console.log(humanScore);
    }
}

playGame();
