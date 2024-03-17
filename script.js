let circulo = document.querySelector('.circulo')
    let imgCopo = document.querySelector('.starbuks')
    let verde = document.querySelector('.verde')
    let amarelo = document.querySelector('.amarelo')
    let rosa = document.querySelector('.rosa')


    verde.addEventListener('click', () => {
        imgCopo.src = "./img/img1.png"
        circulo.style.background = "#017143"
    })
    
    amarelo.addEventListener('click', () => {
        imgCopo.src = "./img/img2.png"
        imgCopo.style.width = '340px'
        circulo.style.background = "#EB7495"
    })
    
    rosa.addEventListener('click', () => {
        imgCopo.src = "./img/img3.png"
        circulo.style.background = "#d752b1"
    })