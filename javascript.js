let cscore = 0;
let hscore = 0;
function getComputerChoice(){
    let choice = ["rock","paper","scissors"];
    let a = Math.floor(Math.random() * 3 );
    return choice[a];
}
const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const playerSelection = this.id;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
      });
    });

    const div = document.createElement("div");    
    result.appendChild(div);

function checkWinner(){
    if(cscore>=5){
        div.textContent = "Computer Won";
        resetGame();
    }else if(hscore>=5){
        div.textContent = "Hooman Won"
        resetGame();
    }
}
function resetGame(){
    cscore = 0;
    hscore = 0;
    
}
function playRound(playerSelection, computerSelection){
    const b=computerSelection;
    const a=playerSelection;
    if (a === "rock"){
        if(b === "paper"){
            cscore++;
        }else{
            hscore++;
        }
    }else if(a === "paper"){
        if(b === "rock"){
            hscore++;
        }else{
            cscore++;
        }
    }else{
        if(b === "paper"){
            hscore++;
        }else{
            cscore++;
        }
    }
    checkWinner();
}

