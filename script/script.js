const items = ['rock', 'paper', 'scissors'];

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function playRound(player){
    let pc = Math.floor(Math.random() * 3);
    
    console.log(player, pc)
    if(pc==player){
        res.textContent = `Draw! ${items[pc]} is equal to ${items[player]}`;
    }else if(pc===0 && player===1){
        res.textContent = `Player Wins! ${items[player]} beats ${items[pc]}`;
        return playerPoints += 1;
    }else if(pc===0 && player===2){
        res.textContent = `Computer Wins! ${items[pc]} beats ${items[player]}`;
        return computerPoints += 1;
    }else if(pc===1 && player===0){
        res.textContent = `Computer Wins! ${items[pc]} beats ${items[player]}`;
        return computerPoints += 1;
    }else if(pc===1 && player===2){
        res.textContent = `Player Wins! ${items[player]} beats ${items[pc]}`;
        return playerPoints += 1;
    }else if(pc===2 && player===0){
        res.textContent = `Player Wins! ${items[player]} beats ${items[pc]}`;
        return playerPoints += 1;
    }else if(pc===2 && player===1){
        res.textContent = `Computer Wins! ${items[pc]} beats ${items[player]}`;
        return computerPoints += 1;
    }else{
        res.textContent = 'Something went wrong!';
    }
}

function game(player, computer){
    if(player > computer){
        para.textContent = `Player wins the game by ${player} X ${computer}`;
        console.log(`Player wins the game by ${player} X ${computer}`);
    }else if(computer > player){
        para.textContent = `Computer wins the game by ${computer} X ${player}`;
        console.log(`Computer wins the game by ${computer} X ${player}`);
    }else{
        para.textContent = `It's a Draw! ${player} X ${computer}`;
        console.log(`It's a Draw! ${player} X ${computer}`);
    }    
}

const res = document.querySelector('.result');
res.textContent = 'Make a choice';
const para = document.createElement('p');
insertAfter(para, res);

let playerPoints = 0;
let computerPoints = 0;
const choices = document.querySelectorAll('button');
choices.forEach((e) =>{
    e.addEventListener('click', () => {
        playRound(parseInt(e.id));
        res.innerHTML += `<br>Player ${playerPoints} X ${computerPoints} Computer`
        para.textContent = '';
        if(playerPoints === 5|| computerPoints ===5){
            game(playerPoints, computerPoints);
            playerPoints = 0;
            computerPoints = 0;
        }
    })});

