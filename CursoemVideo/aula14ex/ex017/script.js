function calcular() {
    let num = window.document.getElementById('txtnum')
    let t = window.document.getElementById('selt')

    if (num.value.length == 0) {
        window.alert(`[ERRO] Insira algum número.`)
        window.location.reload()
    } else {
        let n = Number(num.value)
        let c = 1 
        t.innerHTML = ''

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`    
            t.appendChild(item)
            c++
        }
    }
    
}