import {
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonSet,
    buttonMore,
    buttonLess,
    forest,
    rainy,
    coffee,
    fireplace,
    sun,
    moon,
    forestSlider,
    rainSlider,
    coffeSlider,
    fireSlider
} from './elements.js'
export default function({ controls,timer,sound }) {

// callback - cria a função e depois executa ela

buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click',function() {
    controls.pause()
    timer.hold()
})

buttonStop.addEventListener('click', function() { // programação declarativa, apenas diz oque fazer
    controls.reset()  // zerar os comandos dos botões
    timer.reset() // vai atualizar o display e zerar o tempo
    sound.stopMusic()
})

buttonSet.addEventListener('click', function() { // quando eu clicar no botão set
    let newMinutes = controls.getMinutes()
    if (!newMinutes) { // Se vim um undefined, ai vai entrar nesse condicional e resetar o time
        timer.reset()
        return
    }
    timer.updateDisplay(newMinutes, 0) // depois executar essa função que vai atualizar o display que veio do prompt
    timer.updateMinutes(newMinutes)
})

buttonMore.addEventListener('click', function(){
    timer.addMinutes()
})

buttonLess.addEventListener('click', function(){
    timer.subTime()
})
sun.addEventListener('click', function(){
    controls.LightOn()
})
moon.addEventListener('click', function(){
    controls.LightOff()
})

// verificar se o botão music clicado tem a class active, se sim, vai tirar, se não adiciona
forest.addEventListener('click', function(){
    forest.classList.toggle('active')
    rainy.classList.remove('active')
    coffee.classList.remove('active')
    fireplace.classList.remove('active')
    sound.musicFlorest()
})

rainy.addEventListener('click', function(){
    forest.classList.remove('active')
    rainy.classList.toggle('active')
    coffee.classList.remove('active')
    fireplace.classList.remove('active')
    sound.musicRainy()
})

coffee.addEventListener('click', function(){
    forest.classList.remove('active')
    rainy.classList.remove('active')
    coffee.classList.toggle('active')
    fireplace.classList.remove('active')
    sound.musicCoffeeShop()
})

fireplace.addEventListener('click', function(){
    forest.classList.remove('active')
    rainy.classList.remove('active')
    coffee.classList.remove('active')
    fireplace.classList.toggle('active')
    sound.musicFireplace()
})

forestSlider.addEventListener('input', sound.forestVolume)
rainSlider.addEventListener('input', sound.rainVolume)
coffeSlider.addEventListener('input', sound.coffeVolume)
fireSlider.addEventListener('input', sound.fireVolume)


}


// se eu passar um argumento na função, ele vai ser utilizado dentro da função
// caso eu não passe, a função vai procurar fora dele o argumento