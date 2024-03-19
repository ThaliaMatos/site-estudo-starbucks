let circulo = document.querySelector('.circulo')
let imgCopo = document.querySelector('.starbucks')
let verde = document.querySelector('.verde')
let amarelo = document.querySelector('.amarelo')
let rosa = document.querySelector('.rosa')


verde.addEventListener('click', () => {
    imgCopo.src = "./img/img1.png"
    circulo.style.background = "#01a661"
    imgCopo.style.width = '';
})

amarelo.addEventListener('click', () => {
    imgCopo.src = "./img/img2.png"
    circulo.style.background = "#EB7495";
    imgCopo.style.width = '';
})

rosa.addEventListener('click', () => {
    imgCopo.src = "./img/img3.png"
    circulo.style.background = "#d752b1";
    imgCopo.style.width = '';
})