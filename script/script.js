const items = ['rock', 'paper', 'scissors'];


function playRound(player){
    let pc = Math.floor(Math.random() * 3);
    const res = document.querySelector('.result');

    console.log(player, pc)
    const userp = 0;
    const pcp = 1;
    if(pc==player){
        res.textContent = `Draw! ${items[pc]} is equal to ${items[player]}`;
    }else if(pc===0 && player===1){
        res.textContent = `Player Wins! ${items[player]} beats ${items[pc]}`;
        return userp;
    }else if(pc===0 && player===2){
        res.textContent = `Computer Wins! ${items[pc]} beats ${items[player]}`;
        return pcp;
    }else if(pc===1 && player===0){
        res.textContent = `Computer Wins! ${items[pc]} beats ${items[player]}`;
        return pcp;
    }else if(pc===1 && player===2){
        res.textContent = `Player Wins! ${items[player]} beats ${items[pc]}`;
        return userp;
    }else if(pc===2 && player===0){
        res.textContent = `Player Wins! ${items[player]} beats ${items[pc]}`;
        return userp;
    }else if(pc===2 && player===1){
        res.textContent = `Computer Wins! ${items[pc]} beats ${items[player]}`;
        return pcp;
    }else{
        res.textContent = 'Something went wrong!';
}
}

function game(){
    let playerPoints = 0;
    let computerPoints = 0;

    if(playerPoints > computerPoints){
        alert(`Player wins the game by ${playerPoints} X ${computerPoints}`);
        console.log(`Player wins the game by ${playerPoints} X ${computerPoints}`);
    }else if(computerPoints > playerPoints){
        alert(`Computer wins the game by ${computerPoints} X ${playerPoints}`);
        console.log(`Computer wins the game by ${computerPoints} X ${playerPoints}`);
    }else{
        alert(`It's a Draw! ${playerPoints} X ${computerPoints}`)
        console.log(`It's a Draw! ${playerPoints} X ${computerPoints}`)
    }
}

const choices = document.querySelectorAll('button');
choices.forEach((e) =>{
    e.addEventListener('click', () => playRound(parseInt(e.id)));
})

//game();