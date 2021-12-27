function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > anoAtual) {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = anoAtual - fAno.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/homem-criança.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'img/homem-adolescente.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'img/homem-adulto.png')
            } else {
               img.setAttribute('src', 'img/homem-idoso.png')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/mulher-criança.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'img/mulher-adolescente.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'img/mulher-adulta.png')
            } else {
                img.setAttribute('src', 'img/mulher-idosa.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `O resultado é um ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}