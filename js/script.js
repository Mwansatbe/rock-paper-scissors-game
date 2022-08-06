// Function that randomly chooses "rock", "paper" and "scissors" options

const button = document.querySelectorAll("button");
const val = document.querySelector("#choice");

function click(){
     button.forEach((button)=>{
        button.addEventListener("click", (playGame)=>{   
        let txt = (button.value).toString().toLowerCase();
        alert((playRound(txt)));
        // alert(playRound(txt));
        if (playerScore>computerScore && runningTotal===5){
            alert(`You are a winner\n ${playerScore} of 5 games \nHit Play Again to play a round of 5 or continue`);
        }
        else if ((computerScore>playerScore) && runningTotal===5){
            alert(`Computer wins\n${computerScore} of 5 games\nHit Play Again to play a round of 5 or continue`);
    
        }
    
        else if (computerScore=== null && playerScore===null){
            alert("That was not supposed to happen");
        }
    
        else if ((computerScore=== playerScore) && runningTotal===5){
            alert("Tie You have Equal scores of 5 of 5\nHit Play Again to play a round of 5  or continue")
        }   
        })   
    });
}


function getComputerChoice(){
    let options=['rock', 'paper', 'scissors'];
    let choice=options[Math.floor(Math.random()*options.length)];
    return choice;
}

let computerScore =0;
let playerScore =0;
let runningTotal=0;

// Create a round of the game using if statement for all possible choices of use and computer
function playRound(playerSelection, computerSelection){
    computerSelection=getComputerChoice();
    if ((playerSelection===null) && (playerSelection!=="rock" 
    || playerSelection!=="paper" || playerSelection!=="scissors") 
     &&computerSelection===computerSelection){
        return `You didn't enter a valid value for choice \n player score ${playerScore =null} \n computer score: ${computerScore=null}`;
    }
    else if (playerSelection.toLocaleLowerCase() === computerSelection.toLocaleLowerCase() && computerSelection===computerSelection ){
         return `It's a tie \n player score: ${playerScore}\n Player: ${playerSelection} \n computer score: ${computerScore} \n Computer: ${computerSelection}\n Total Rounds: ${++runningTotal}`;
        
     }
     else if (playerSelection.toLocaleLowerCase() === "rock".toLocaleLowerCase() && computerSelection==="scissors" ){
        return `You win: Rock hammers scissors\n player score: ${++playerScore} \n computer score: ${computerScore} \n Player: Rock \nComputer: Scissors\n Total Rounds: ${++runningTotal}`;
       
    }
    else if (playerSelection.toLocaleLowerCase() === "rock".toLocaleLowerCase() && computerSelection==="paper" ){
        return `You lose: Paper wraps rock\n computer score: ${++computerScore} \n player score: ${playerScore} \n Player: Rock \n Computer: Paper\n Total Rounds: ${++runningTotal}`;      
    }
    else if (playerSelection.toLocaleLowerCase() === "scissors".toLocaleLowerCase() && computerSelection==="rock"){
        return `You lose: Rock hammers scissors\n computer score: ${++computerScore} \n player score: ${playerScore} \n Player: Scissors \n Computer: Rock\n Total Rounds: ${++runningTotal}`;      
    }
    else if (playerSelection.toLocaleLowerCase() === "scissors".toLocaleLowerCase() && computerSelection==="paper" ){
        return `You win: Scissors cuts paper \n player score: ${++playerScore} \n computer score: ${computerScore}  \n Player: Scissors \n Computer: Paper\n Total Rounds: ${++runningTotal}`;   
       
    }
    else if (playerSelection.toLocaleLowerCase() === "paper".toLocaleLowerCase() && computerSelection==="scissors" ){
        return `You lose: Scissors cuts paper\n computer score: ${++computerScore} \n player score: ${playerScore}\n Player: Paper \n Computer: Scissors\n Total Rounds: ${++runningTotal}`;      
    }
    else if (playerSelection.toLocaleLowerCase() === "paper".toLocaleLowerCase() && computerSelection==="rock" ){
        return `You win: Paper wraps rock\n player score: ${++playerScore} \n computer score: ${computerScore}\n Player: Paper \n Computer: Rock\n Total Rounds: ${++runningTotal}`;      
    }
    else{
        return "Invalid value"
    }
}


// create function to play game 
function playGame(){
        click();    
}
playGame()
    



