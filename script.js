let quadrado = document.querySelector('.quadrado')
    let imgCopo = document.querySelector('.starbuks')
    let verde = document.querySelector('.verde')
    let amarelo = document.querySelector('.amarelo')
    let rosa = document.querySelector('.rosa')


    verde.addEventListener('click', () => {
        imgCopo.src = "./img/img1.png"
        quadrado.style.background = "#01a661"
    })
    
    amarelo.addEventListener('click', () => {
        imgCopo.src = "./img/img2.png"
        imgCopo.style.width = '340px'
        quadrado.style.background = "#EB7495"
    })
    
    rosa.addEventListener('click', () => {
        imgCopo.src = "./img/img3.png"
        quadrado.style.background = "#d752b1"
    })
