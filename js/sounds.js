import {
    forestSlider,
    rainSlider,
    coffeSlider,
    fireSlider
} from './elements.js'
export default function () {
    const soundFlorest = new Audio ('./sounds/Floresta.wav')
    const soundRainy = new Audio ('./sounds/Chuva.wav')
    const soundCoffeeShop = new Audio ('./sounds/Cafeteria.wav')
    const soundFireplace = new Audio ('./sounds/Lareira.wav')
    const timeEnd = new Audio ('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true')

    soundFlorest.loop = true
    soundRainy.loop = true
    soundCoffeeShop.loop = true
    soundFireplace.loop = true
    
        // let selected = selector.buttonSoundForest.classList.contains('selected')
        // if(selected) {
        //   sound.soundFlorest.pause()
        // } 
        
        // selector.buttonSoundForest.classList.toggle('selected')
    function forestVolume() {
        let inputValeuSound = forestSlider.value
        soundFlorest.volume = inputValeuSound
    }
    function rainVolume() {
        let inputValeuSound = rainSlider.value
        soundRainy.volume = inputValeuSound
    }
    function coffeVolume() {
        let inputValeuSound = coffeSlider.value
        soundCoffeeShop.volume = inputValeuSound
    }
    function fireVolume() {
        let inputValeuSound = fireSlider.value
        soundFireplace.volume = inputValeuSound
    }

    function timeFinish(){
        soundFlorest.pause()
        soundRainy.pause()
        soundCoffeeShop.pause()
        soundFireplace.pause()
        timeEnd.play()
    }

    function musicFlorest(){
        soundFlorest.play()
        soundRainy.pause()
        soundCoffeeShop.pause()
        soundFireplace.pause()
        timeEnd.pause()
    }

    function musicRainy(){
        soundFlorest.pause()
        soundRainy.play()
        soundCoffeeShop.pause()
        soundFireplace.pause()
        timeEnd.pause()
    }

    function musicCoffeeShop(){
        soundFlorest.pause()
        soundRainy.pause()
        soundCoffeeShop.play()
        soundFireplace.pause()
        timeEnd.pause()
    }
    
    function musicFireplace(){
        soundFlorest.pause()
        soundRainy.pause()
        soundCoffeeShop.pause()
        soundFireplace.play()
        timeEnd.pause()
    }
    
    function stopMusic(){
        soundFlorest.pause()
        soundRainy.pause()
        soundCoffeeShop.pause()
        soundFireplace.pause()
    }
    
    return {
        musicFlorest,
        musicRainy,
        musicCoffeeShop,
        musicFireplace,
        timeFinish,
        stopMusic,
        forestVolume,
        rainVolume,
        coffeVolume,
        fireVolume
    }
}