// Function that randomly chooses "rock", "paper" and "scissors" options

const container = document.querySelector("#buttons")
const button = document.querySelectorAll("button");
const val = document.querySelector("#choice");

function getValue(){
    button.forEach((button)=>{
        button.addEventListener("click", ()=>{
        let txt = (button.textContent).toString().toLowerCase();
        return txt;
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

// Create a round of the game using if statement for all possible choices of use and computer
function playRound(playerSelection, computerSelection){
    computerSelection=getComputerChoice();
    playerSelection = btn1Value;


    if ((playerSelection===null) && (playerSelection!=="rock" 
    || playerSelection!=="paper" || playerSelection!=="scissors") 
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
        return `You lose: Paper wraps rock\n computer score ${++computerScore} \n Player:rock \n Computer: paper`;      
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


// create function to play game five times
function playGame(){
    for(let i =0; i<5; i++){
        let result=playRound();
        console.log(result);
    }
    // select winner based on score or return invalid
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


const rock = document.querySelector(".choice");
const paper = document.querySelector(".choice1");
const scissors = document.querySelector(".choice2");
const btn=document.querySelector(".choice");
const btn1=document.querySelector(".choice1");
const btn2=document.querySelector(".choice2");

const btnValue=String((btn.value)).toLocaleLowerCase();

const btn1Value=String((btn1.value)).toLocaleLowerCase();
   
const btn2Value=String((btn2.value)).toLocaleLowerCase();
playGame();



//         function getValue(){
//            const choice =document.querySelector("#choice");
//            chosen = document.createElement("div");
//            chosen.innerText=choice;
//            container.appendChild(chosen);


//         }
//         getValue();

//             const choice = document.createElement("div");
//             choice.classList.add("result");
//             const para = document.querySelector("p");
//             choice.innerHTML="Hello world";
//             choice.innerText="Mother sucker";
//             // choice.innerHTML=
//             // container.appendChild(choice);
    

       
//         // console.log(choice.innerText=val.value);
//         // console.log(choice);
//         // container.appendChild(choice);
    



