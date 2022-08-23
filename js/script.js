// Function that randomly chooses "rock", "paper" and "scissors" options

const button = document.querySelectorAll("button");
const val = document.querySelector("#choice");
const choiceResult= document.querySelector(".choiceResult")
const result = document.querySelector(".results");
const btn = document.querySelector(".click");


function click(){
   
     button.forEach((button)=>{
        button.addEventListener("click", (playGame)=>{   
        let txt = (button.value).toString().toLowerCase();
        playRound(txt);
        if (playerScore>computerScore && runningTotal===5){
            result.innerHTML=`<p>Winner!!<br> ${playerScore} of 5 games<br> Hit Play Again to play a round of 5 or continue</p>`;
            btn.removeAttribute("hidden");
        }
        else if ((computerScore>playerScore) && runningTotal===5){
            result.innerHTML=`<p>Computer wins<br>${computerScore} of 5 games<br> Hit Play Again to play a round of 5 or continue</p>`;
            btn.removeAttribute("hidden");
            
            
    
        }
    
        else if (computerScore=== null && playerScore===null){
            alert("That was not supposed to happen");
        }
    
        else if ((computerScore=== playerScore) && runningTotal===5){
            result.innerHTML="<p>Tie!! <br>You have Equal scores with Computer 5 of 5 games<br>Hit Play Again to play a round of 5  or continue</p>";
            btn.removeAttribute("hidden");
        } 
        else if(runningTotal>=5) {
            result.innerHTML="";
            choiceResult.innerHTML="<p>Click play again</p>";
            btn.removeAttribute("hidden");
            playGame();

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
         return choiceResult.innerHTML=`<p>It's a tie <br> player score: ${playerScore}<br> Player: ${playerSelection} <br> computer score: ${computerScore} <br> Computer: ${computerSelection}<br> Total Rounds: ${++runningTotal}</p>`;
        
     }
     else if (playerSelection.toLocaleLowerCase() === "rock".toLocaleLowerCase() && computerSelection==="scissors" ){
        return choiceResult.innerHTML=`<p>You win: Rock hammers scissors<br>  player score: ${++playerScore} <br>  computer score: ${computerScore} <br>  Player: Rock <br> Computer: Scissors<br>  Total Rounds: ${++runningTotal}</p>`;
       
    }
    else if (playerSelection.toLocaleLowerCase() === "rock".toLocaleLowerCase() && computerSelection==="paper" ){
        return choiceResult.innerHTML=`<p>You lose: Paper wraps rock<br> computer score: ${++computerScore} <br>  player score: ${playerScore}<br> Player: Rock<br>  Computer: Paper<br> Total Rounds: ${++runningTotal}</p>`;      
    }
    else if (playerSelection.toLocaleLowerCase() === "scissors".toLocaleLowerCase() && computerSelection==="rock"){
        return choiceResult.innerHTML=`<p>You lose: Rock hammers scissors<br>  computer score: ${++computerScore} <br>  player score: ${playerScore} <br>  Player: Scissors <br>  Computer: Rock<br>  Total Rounds: ${++runningTotal}</p>`;      
    }
    else if (playerSelection.toLocaleLowerCase() === "scissors".toLocaleLowerCase() && computerSelection==="paper" ){
        return choiceResult.innerHTML=`<p>You win: Scissors cuts paper <br>  player score: ${++playerScore} <br>  computer score: ${computerScore} <br> Player: Scissors <br>  Computer: Paper<br>  Total Rounds: ${++runningTotal}</p>`;   
       
    }
    else if (playerSelection.toLocaleLowerCase() === "paper".toLocaleLowerCase() && computerSelection==="scissors" ){
        return choiceResult.innerHTML=`<p>You lose: Scissors cuts paper<br> computer score: ${++computerScore} <br> player score: ${playerScore}<br> Player: Paper <br> Computer: Scissors<br>  Total Rounds: ${++runningTotal}</p>`;      
    }
    else if (playerSelection.toLocaleLowerCase() === "paper".toLocaleLowerCase() && computerSelection==="rock" ){
        return choiceResult.innerHTML=`<p>You win: Paper wraps rock<br>  player score: ${++playerScore} <br>  computer score: ${computerScore}<br>  Player: Paper <br>  Computer: Rock<br>  Total Rounds: ${++runningTotal}</p>`;      
    }
    else{
        return "Invalid value"
    }
}


// create function to play game 
function playGame(){
        click();    
}
playGame();
    



