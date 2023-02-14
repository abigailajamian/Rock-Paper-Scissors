
function getComputerChoice (){
    const randomNumber = Math.floor (Math.random()*3);
    switch (randomNumber){
        case 0: 
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == computerSelection){
        return 'It\'s a tie!';
    } if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'paper'){
            return 'Computer Wins!';
        } else {
            return 'You win!'
        }
    }

    if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection =='scissors'){
            return 'Computer Wins!';
        } else {
            return 'You win!'
        }
    }

    if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection == 'rock'){
            return 'Computer Wins!';
        } else {
            return 'You win!'
        }
    }
}

//plays 5 rounds code
function game(){
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore<5 && computerScore<5){
        let playerSelection = userchoice();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection);
        console.log (playerSelection,computerSelection,result);
        if (result == 'You win!'){
            playerScore++;
            console.log(playerScore,computerScore);
        } else if(result== 'Computer Wins!' ){
            computerScore++;
            console.log(playerScore,computerScore);
        } else {
            console.log(playerScore,computerScore);
        }

    }
    if(playerScore == 5){
        return 'Player wins';
    }else(computerScore == 5){
        return 'Computer Wins!';
    } 
    
}

//console.log(game());

function userchoice(){
    const rock = document.querySelector('#but1');
    const paper = document.querySelector('#but2');
    const scissors = document.querySelector('#but3');

    rock.addEventListener('click',e=>){
        playRound('rock');
    }
    
    paper.addEventListener('click', e=>){
        playRound('paper');
    }
    
    scissors.addEventListener('click', e=>){
        playRound('scissors');
    }

}
