export default function Controls ( {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    body,
    sun,
    moon,
}) {

    function LightOn() {
        body.classList.add('dark')
        sun.classList.add('hide')
        moon.classList.remove('hide')
    }
    function LightOff() {    
        body.classList.remove('dark')
        sun.classList.remove('hide')
        moon.classList.add('hide')  
    }
    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
      }
    function pause(){
        buttonPause.classList.add('hide') // programação imperativa, diz passo a passo oque vai ser feito
        buttonPlay.classList.remove('hide')
    }
    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
    }
    function getMinutes(){
        let newMinutes = prompt('Quantos minutos?') // ele vai perguntar quantos minutos pelo prompt e adicionar em newMinutes
        if (notNumber(newMinutes)) { // Vai executar a função notNumber que é uma validação para caso seja digitado uma letra ou se vim um undefined ( cancelar ou nada ), ai vai entrar nesse condicional e retornar false e não fazer nada.
            return false
        }
        
        return newMinutes
    }
    function notNumber(value) {
        return isNaN(value) || value == ''
    }

    return {
        play,
        reset,
        pause,
        getMinutes,
        LightOn,
        LightOff
    }
}