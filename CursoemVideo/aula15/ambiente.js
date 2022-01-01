let num = [2, 5, 8, 9]

console.log(`Vetor com ${num.length} elementos`)
console.log()

let pos = num.indexOf(2)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
