const items = ['rock', 'paper', 'scissors'];

function computerPlay(){
    let choice = Math.floor(Math.random()*3);
    return choice;
}

function playerChoice(){
    let userChoice;
    while (true){
        userChoice = prompt('Rock, paper or scissors?').toLowerCase();
        if(userChoice === 'rock'){
            userChoice = 0;
            break;
        }else if(userChoice === 'paper'){
            userChoice = 1;
            break;
        }else if(userChoice === 'scissors'){
            userChoice = 2;
            break;
        }else{
            alert('Write a valid input!');
        }
    }
    return userChoice;

}

function playRound(pc, player){
    const userp = 0;
    const pcp = 1;
    if(pc==player){
        console.log(`Draw! ${items[pc]} is equal to ${items[player]}`);
    }else if(pc===0 && player===1){
        console.log(`Player Wins! ${items[player]} beats ${items[pc]}`);
        return userp;
    }else if(pc===0 && player===2){
        console.log(`Computer Wins! ${items[pc]} beats ${items[player]}`);
        return pcp;
    }else if(pc===1 && player===0){
        console.log(`Computer Wins! ${items[pc]} beats ${items[player]}`);
        return pcp;
    }else if(pc===1 && player===2){
        console.log(`Player Wins! ${items[player]} beats ${items[pc]}`);
        return userp;
    }else if(pc===2 && player===0){
        console.log(`Player Wins! ${items[player]} beats ${items[pc]}`);
        return userp;
    }else if(pc===2 && player===1){
        console.log(`Computer Wins! ${items[pc]} beats ${items[player]}`);
        return pcp;
    }else{
        console.log('Something went wrong!');
    }
}

function game(){
    let playerPoints = 0;
    let computerPoints = 0;

    for(let i = 0; i < 5; i++){
        let round = playRound(computerPlay(), playerChoice());
        if(round === 0){
            playerPoints +=1;
        }else if(round === 1){
            computerPoints+=1;
        }
        console.log(`Player ${playerPoints} X ${computerPoints} Computer`)
    }
    if(playerPoints > computerPoints){
        console.log(`Player wins the game by ${playerPoints} X ${computerPoints}`);
    }else if(computerPoints > playerPoints){
        console.log(`Computer wins the game by ${computerPoints} X ${playerPoints}`);
    }else{
        console.log(`It's a Draw! ${playerPoints} X ${computerPoints}`)
    }
}

game();