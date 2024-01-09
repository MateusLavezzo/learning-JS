function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //Bom DIA
    img.src = 'pexels-artur-roman-1167355.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    //Boa Tarde
    img.src = 'pexels-essow-k-1669939 (1) grande.jpg'
    document.body.style.background = '#b9846f'
} else {
    //Boa noite
    img.src = 'pexels-pixabay-355465.jpg'
    document.body.style.background = '#515154'
}

} 