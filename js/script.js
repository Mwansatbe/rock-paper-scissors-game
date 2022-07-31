// Function that randomly chooses "rock", "paper" and "scissors" options
function getComputerChoice(){
    let options=['rock', 'paper', 'scissors'];
    let choice=options[Math.floor(Math.random()*options.length)];
    return choice;
}
// call function and display it in console
// console.log(getComputerChoice());

let computerScore =0;
let playerScore =0;

// Create a round of the game using if statement for all possible choices of use and computer
function playRound(playerSelection, computerSelection){
    computerSelection=getComputerChoice();
    playerSelection =prompt("Choose:[+Rock]  [+Paper]  or [+Scissor]");


    if (playerSelection ===''  || playerSelection===null || playerSelection!=="rock" 
    || playerSelection!=="paper" || playerSelection!=="scissors" 
     &&computerSelection===computerSelection){
        return `You didn't enter a valid value for choice \n player score ${playerScore =null} \n computer score ${computerScore=null}`;
    }
    else if (playerSelection.toLocaleLowerCase() === computerSelection.toLocaleLowerCase() && computerSelection===computerSelection ){
         return `It's a tie \n player score ${playerScore}\n Player:${playerSelection} \n computer score ${computerScore} \n Computer: ${computerSelection}`;
        
     }
     else if (playerSelection.toLocaleLowerCase() === "rock".toLocaleLowerCase() && computerSelection==="scissors" ){
        return `You win: Rock hammers scissors\n player score ${++playerScore} \n Player: rock \nComputer:scissors`;
       
    }
    else if (playerSelection.toLocaleLowerCase() === "rock".toLocaleLowerCase() && computerSelection==="paper" ){
        return `You lose: Paper beats wraps rock\n computer score ${++computerScore} \n Player:rock \n Computer: paper`;      
    }
    else if (playerSelection.toLocaleLowerCase() === "scissors".toLocaleLowerCase() && computerSelection==="rock"){
        return `You lose: Rock hammers scissors\n computer score ${++computerScore}\n Player: scissors \n Computer:rock`;      
    }
    else if (playerSelection.toLocaleLowerCase() === "scissors".toLocaleLowerCase() && computerSelection==="paper" ){
        return `You win: Scissors cuts paper \n player score ${++playerScore} \n Player:scissors \n Computer:paper`;   
       
    }
    else if (playerSelection.toLocaleLowerCase() === "paper".toLocaleLowerCase() && computerSelection==="scissors" ){
        return `You lose: Scissors cuts paper\n computer score ${++computerScore}\n Player: paper \n Computer:scissors`;      
    }
    else if (playerSelection.toLocaleLowerCase() === "paper".toLocaleLowerCase() && computerSelection==="rock" ){
        return `You win: Paper wraps rock\n player score ${++playerScore}\n Player: paper \n Computer:rock`;      
    }
    else{
        return "Invalid value"
    }
}
 
// let winner =playRound();
// console.log(winner);

// create variable to pass to pass to playRound function
// const computerSelection=getComputerChoice();
// console.log(computerSelection);
// const playerSelection =prompt("Enter value");
// // call function and display results
// console.log(playRound(playerSelection, computerSelection));


// create function to play game five times
function playGame(){
    for(let i =0; i<5; i++){
        let result=playRound();
        console.log(result);
    }
    if (playerScore>computerScore){
        alert("You are a winner")
    }
    else if (computerScore>playerScore){
        alert("Computer wins")

    }

    else if (computerScore=== null && playerScore===null){
        alert("That was not supposed to happen");
    }

    else if (computerScore=== computerScore){
        alert("Tie")
    }
    
}
// //call function to play game five times
playGame();