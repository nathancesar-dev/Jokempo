const result = document.querySelector("#GameResult")
const humanpoints = document.querySelector("#PlayerPoints")
const machinepoints = document.querySelector("#MachinePoints")

const HumanPlay = (humanchoice) => {
    
    playthegame(humanchoice, MachinePlay())
}

const MachinePlay = (machinechoice) => {
    const choices = ["rock", "paper", "scissors",]
    const randomnumber = Math.floor(Math.random() * 3)
    
    return choices[randomnumber]
}

let machinepointsnumebr = 0
let humanpointsnumebr = 0

const playthegame = (human, machine) =>{
    console.log("Human: " + human + ", Machine: " + machine)
    if(human === machine){
        result.innerHTML = "Empate!"
    }else if ( (human === 'rock' && machine === 'scissors') || (human === 'scissors' && machine === 'paper') || (human === 'paper' && machine === 'rock') ){
        humanpointsnumebr++
        humanpoints.innerHTML = humanpointsnumebr
        result.innerHTML = "Você ganhou!"

    }else{
        machinepointsnumebr++
        machinepoints.innerHTML = machinepointsnumebr
        result.innerHTML = "Você Perdeu!"
    }
}
