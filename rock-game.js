
    function getComputerChoice() {

        let arr = ['rock', 'paper', 'scissors'];
        
            let random = Math.floor(Math.random()*arr.length);
        
            let output = arr[random];

            return output
                                          //get random choice from computer with this function
    }

    const background = document.querySelector('body')
    
    background.style.backgroundImage.filter="contrast(50%)"

  

  
        

//these call the playRound function each time a button is clicked
   const rock = document.querySelector('#rock')

   rock.onclick = () => playRound('rock', getComputerChoice())

   const paper = document.querySelector('#paper')
                                                                          //need to call getComputerChoice function to rest computerSelection for every click
   paper.onclick = () => playRound('paper', getComputerChoice())

  const scissors = document.querySelector('#scissors')

  scissors.onclick = () => playRound('scissors', getComputerChoice())

        const computerSelection = getComputerChoice()
   

    const reset = document.querySelector('#reset') //resets game after player or computer reaches a score of 5

    reset.onclick = () => location.reload()


function playRound(playerSelection, computerSelection) {

 

    //set for player ROCK //

    if (playerSelection == 'rock' && computerSelection == 'paper') {
    compScoreTotal++
    compUpdate() //updates comp score
   winOrLose() //checks to see if anybody has a score of 5
   comment.textContent = `You lose! ${computerSelection} beats rock.` //from comment variable 
       
    }
        else if (playerSelection == 'rock' && computerSelection == 'scissors') {
       playerScoreTotal++
       playerUpdate() //updates player score
       winOrLose()
       comment.textContent = `You win! ${playerSelection} beats scissors.`
            
        }

        else if (playerSelection == 'rock' && computerSelection == 'rock') {

            comment.textContent = "Draw!"
        }

    
//set for player PAPER //
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        compScoreTotal++
        compUpdate()
        winOrLose()
        comment.textContent = `You lose! ${computerSelection} beat paper.`
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
    playerScoreTotal++
    playerUpdate()
    winOrLose()
    comment.textContent = `You win! ${playerSelection} beats rock.`
    }

    else if (playerSelection == 'paper' && computerSelection == 'paper') {
       
        comment.textContent =  "Draw!"
    }

    //Set for player SCISSORS //

    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        compScoreTotal++
        compUpdate()
        winOrLose()
        comment.textContent = `You lose! ${computerSelection} beat scissors.`

    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    playerScoreTotal++
    playerUpdate()
    winOrLose()
    comment.textContent = `You win! ${playerSelection} beats paper.`
    }

    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    
        comment.textContent = "Draw!"

    }
 
}
let playerScoreTotal = 0
let compScoreTotal = 0


function playerUpdate() {
    const playerScore = document.querySelector('.player-score')
    playerScore.textContent = `${playerScoreTotal}`
}
function compUpdate() {                                            //these functions output the current score to the UI
    const compScore = document.querySelector('.comp-score')
    compScore.textContent = `${compScoreTotal}`
}

function winOrLose() {   //checks to see if anyone has a score of 5 and displays text for winner or loser
    if (playerScoreTotal === 5) {

        comment.setAttribute('style', 'display: none;')

  let result = document.querySelector('#play') //will be appending div to this

        const winner = document.createElement('div')

        const winText = document.createElement('h2')

        winText.classList.add('win')

        winText.textContent = `You're the WINNER!`

        winner.appendChild(winText) //need to append the h2 first before we can append the div

        result.appendChild(winner)
     
        compScoreTotal = 0

        playerScoreTotal = 0

        const interface = document.querySelector('#container')
        interface.setAttribute('style', 'display: none;')

    }
    else if (compScoreTotal === 5) {

        comment.setAttribute('style', 'display: none;')

        let result = document.querySelector('#play') //will be appending div to this

        const loser = document.createElement('div')

        const loseText = document.createElement('h2')

        loseText.classList.add('lose')

        loseText.textContent = `You're the LOSER!`

        loser.appendChild(loseText) //need to append the h2 first

        result.appendChild(loser)

        const interface = document.querySelector('#container')
        interface.setAttribute('style', 'display: none;')
    
    }
}

let comment = document.querySelector('.comment') //used in playRound function to display winner or loser of each round



