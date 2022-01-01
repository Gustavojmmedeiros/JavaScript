function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} minutos.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#EEE12F'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/fototarde.png'
        document.body.style.background = '#F3A54F'
    } else {
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#111E26'
    }
}