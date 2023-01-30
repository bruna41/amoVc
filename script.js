// Coração img
const loveMe = document.querySelector('.loveMe')

let clickTime = 0

loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    setTimeout(() => heart.remove(), 1000)
}

// Textos
let iniciar = document.querySelector('.iniciar')
let textoInicial = document.getElementById('textoInicial')
let textao = document.getElementById('textao')
let love = document.querySelector('.love')
let audio = document.querySelector('audio')

iniciar.addEventListener('click', () => {
    love.classList.remove('hide')
    aparecerFrase(love)
    audio.classList.remove('hide')
    setTimeout(() => {
        aparecerTexto(textao)
    }, 8500)
})

function aparecerTexto(elemento) {
    textoInicial.classList.add('hide')
    textao.classList.remove('hide')
    let arrayTextao = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    arrayTextao.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 200 * i)
    });
}

function aparecerFrase(elemento) {
    let arrayLove = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    arrayLove.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 300 * i)
    });
}

