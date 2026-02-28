function getComputerChoice() {
    random = Math.floor(Math.random()*2) // Random between 0 , 1 ,2 : If 0 , rock . If 1, paper, IF 2 , scissors.
    if (random === 0) {
        return "Rock"
    }
    else if (random === 1 ) {
        return "Paper"
    }
    else return "Scissors"
}

function  Uppercasechoice(text) {
    return text[0].toUpperCase() + text.substring(1).toLowerCase()
}


function getHumanChoice() {
    let userInput = prompt("Choose between Rock , Paper or Scissors")
    return userInput
}

function playGame() {
    let humanScore= 0
    let computerScore = 0 
    function playRound() {
        computerChoice = getComputerChoice()
        console.log("Computer : " + computerChoice)
        humanChoice = Uppercasechoice(getHumanChoice())
        console.log("Human " + humanChoice)
        if ((humanChoice === "Rock" && computerChoice === "Scissors" )|| (humanChoice === "Paper" && computerChoice === "Rock" ) 
            || (humanChoice === "Scissors" && computerChoice === "Paper" ) ) {
            humanScore+=1
            return console.log("Human Wins ! " + humanChoice + " " + "beats " + computerChoice)
        } 
        else if ((computerChoice === "Rock" && humanChoice === "Scissors" )|| (computerChoice === "Paper" && humanChoice === "Rock" ) 
            || (computerChoice === "Scissors" && humanChoice === "Paper" ) ) {
            computerScore+=1
            return console.log("Computer Wins ! " + computerChoice + " " + "beats " + humanChoice)
        } 
        else return console.log("Tie ! No one Wins")
}
    for (let i = 1 ; i <=5 ; i++) {
        round = playRound()
    }
    if (humanScore > computerScore) {
        return console.log("Human Wins ! ")
    }
    else if (computerScore > humanScore) {
        return console.log("Computer Wins ! ")
    }
    else console.log("Tie ! ")

}

playGame()