const p = document.querySelector("#result")
const humanpoints = document.querySelector("#pontos")
const machinepoints = document.querySelector("#pontosMaquina")

const humanplay = (humanchoice) => {
    
    playthegame(humanchoice, machineplay())
}

const machineplay = (machinechoice) => {
    const choices = ["rock", "paper", "scissors",]
    const randomnumber = Math.floor(Math.random() * 3)
    
    return choices[randomnumber]
}

let machinepointsnumebr = 0
let humanpointsnumebr = 0

const playthegame = (human, machine) =>{
    console.log(human, machine)
    if(human === machine){
        p.innerHTML = "empate!"
    }else if ( (human === 'rock' && machine === 'scissors') || (human === 'scissors' && machine === 'paper') || (human === 'paper' && machine === 'rock') ){
        humanpointsnumebr++
        humanpoints.innerHTML = humanpointsnumebr
        p.innerHTML = "Você ganhou!"

    }else{
        machinepointsnumebr++
        machinepoints.innerHTML = machinepointsnumebr
        p.innerHTML = "Você Perdeu!"
    }
}
