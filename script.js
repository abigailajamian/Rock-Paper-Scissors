
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


function game(){
    let playerScore = 0;
    let computerScore = 0;
    for( let i = 0; i<5; i++){
        let playerSelection = prompt('user input');
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
    if(playerScore > computerScore){
        return 'Player wins';
    }else if (computerScore > playerScore){
        return 'Computer Wins!';
    } else {
        return 'It\'s a tie!'
    }
}

console.log(game());


