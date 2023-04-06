import Sounds from './sounds.js'

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
}) {

 let timerTimeOut
 let minutes = Number(minutesDisplay.textContent)
 let seconds = Number(secondsDisplay.textContent)
 let newMinutes

 function updateDisplay(newMinutes, seconds){
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '00')
    secondsDisplay.textContent = String(seconds).padStart(2, '00')
}

 function addMinutes() { 
    minutes = Number(minutesDisplay.textContent) 
    seconds = Number(secondsDisplay.textContent)
    minutesDisplay.textContent = String(minutes + 5).padStart(2, '00') 
    secondsDisplay.textContent = String(seconds + 0).padStart(2, '00') 
    newMinutes = minutes
} 

function subTime() { 
    minutes = Number(minutesDisplay.textContent)
    seconds = Number(secondsDisplay.textContent)
    if ( minutes <= 5 ) {
        resetControls()
        updateDisplay(0,0)
        return
    }
    minutes = minutes - 5
    updateDisplay(minutes,seconds)
} 

 function reset() {
    updateDisplay(0,0) // Quando clicar no botão que contenha a função 'resetTimer', vai atualizar o display colocando o valor ' minutes ' = que veio do html
    clearTimeout(timerTimeOut) // quando clicar no stop. vai parar a contagem, fazendo morrer a função timerTimeOut
}

function countdown(){
        timerTimeOut = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds == 0

            updateDisplay(minutes,0)

            if( isFinished ) { 
                resetControls() // Vai resetar os controles, sai pause e entra play, sai stop e entra set
                updateDisplay(0,0) // Vai fazer com que o crônometro volte ao tempo que foi inserido, seja pelo html ou pelo prompt
                Sounds().timeFinish()
                return
            }
            
            if (seconds <= 0) {
                seconds = 60
                --minutes
            }

            updateDisplay(minutes, String(seconds -1 ))

            countdown() // Uma função é dita recursiva quando dentro dela é feita uma ou mais chamadas a ela mesma.
        }, 1000)
}

function updateMinutes(newMinutes) {
    minutes = newMinutes
}

function hold(){
    clearTimeout(timerTimeOut) // tá segurando
}

 return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
    addMinutes,
    subTime
 }

}
