const items = ['rock', 'paper', 'scissors'];

function computerPlay(){
    let choice = Math.floor(Math.random()*3);
    return choice;
}

function playerChoice(){
    let userChoice = prompt('Rock, paper or scissors?').toLowerCase;
}

function playRound(pc, player){

}