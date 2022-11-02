

    function getComputerChoice() {

        let arr = ['rock', 'paper', 'scissors'];
        
            let random = Math.floor(Math.random()*arr.length);
        
            let output = arr[random];

            return output
                                          //get random choice from computer with this function
    }

   

   function game() {

  
    for (let i = 0; i < 5; i++) {

        const computerSelection = getComputerChoice()
        const playerSelection = prompt("Rock, paper or scissors?").toLowerCase()
       console.log(playRound(playerSelection, computerSelection))             // outputs result to the console     
 
alert(`The score is player ${playerScore}, computer ${compScore}`) //shows the current score 

}
if (i = 5 && playerScore > compScore) {
    alert(`You win! ${playerScore}, ${compScore}`)       
    }                                                  //after 5 rounds display score and if player wins or loses
    else if (i = 5 && playerScore < compScore) {
    alert(`You lose! ${playerScore}, ${compScore}`)
        }
   }
   let playerScore = 0;
   let compScore = 0;

function playRound(playerSelection, computerSelection) {



    //set for player ROCK //

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        compScore++
        return `You lose! ${computerSelection} beats rock.`
       
    }
        else if (playerSelection == 'rock' && computerSelection == 'scissors') {
         playerScore++
           return `You win! ${playerSelection} beats scissors.`
            
        }

        else if (playerSelection == 'rock' && computerSelection == 'rock') {

            return "Draw!"
        }

    
//set for player PAPER //
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
      compScore++
        return `You lose! ${computerSelection} beat paper.`
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
     playerScore++
        return `You win! ${playerSelection} beats rock.`
    }

    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return "Draw!"
    }

    //Set for player SCISSORS //

    if (playerSelection == 'scissors' && computerSelection == 'rock') {
      compScore++
       return `You lose! ${computerSelection} beat scissors.`
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      playerScore++
        return `You win! ${playerSelection} beats paper.`
    }

    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    return "Draw!"
    }

    //set for invalid input //

    else {
        return "Please enter one of rock, paper or scissors"
    }
 
}
game()    //Need to calll game function to run game
