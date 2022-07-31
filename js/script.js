// Function that randomly chooses "rock", "paper" and "scissors" options
function getComputerChoice(){
    let options=['rock', 'paper', 'scissors'];
    let choice=options[Math.floor(Math.random()*options.length)];
    return choice;
}
// call function and display it in console
// console.log(getComputerChoice());



// Create a round of the game using if statement for all possible choices of use and computer
function playRound(playerSelection, computerSelection){
    if (playerSelection ===''  || playerSelection===null &&computerSelection===computerSelection){
        return "You didn't enter a value for choice";
    }
    else if (playerSelection.toLocaleLowerCase() === computerSelection.toLocaleLowerCase() && computerSelection===computerSelection ){
         return "It's a tie";
        
     }
     else if (playerSelection.toLocaleLowerCase() === "rock".toLocaleLowerCase() && computerSelection==="scissors" ){
        return "You win: Rock hammers scissors";
       
    }
    else if (playerSelection.toLocaleLowerCase() === "rock".toLocaleLowerCase() && computerSelection==="paper" ){
        return "You lose: Paper beats wraps rock";      
    }
    else if (playerSelection.toLocaleLowerCase() === "scissors".toLocaleLowerCase() && computerSelection==="rock"){
        return "You lose: Rock hammers scissors";      
    }
    else if (playerSelection.toLocaleLowerCase() === "scissors".toLocaleLowerCase() && computerSelection==="paper" ){
        return "You win: Scissors cuts paper";   
       
    }
    else if (playerSelection.toLocaleLowerCase() === "paper".toLocaleLowerCase() && computerSelection==="scissors" ){
        return "You lose: Scissors cuts paper";      
    }
    else if (playerSelection.toLocaleLowerCase() === "paper".toLocaleLowerCase() && computerSelection==="rock" ){
        return "You win: Paper wraps rock";      
    }
    else{
        return "Invalid value"
    }
}

// create variable to pass to pass to playRound function
// const computerSelection=getComputerChoice();
// console.log(computerSelection);
// const playerSelection =prompt("Enter value");
// // call function and display results
// console.log(playRound(playerSelection, computerSelection));


// create function to play game five times
function playGame(){
    for(let i =0; i<5; i++){
        const computerSelection=getComputerChoice();
        const playerSelection =prompt("Enter value");
        // call function and display results
        console.log(playRound(playerSelection, computerSelection));
    }

}
//call function to play game five times
playGame();