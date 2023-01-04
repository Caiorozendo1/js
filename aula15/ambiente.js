let num = [5,8,9,4]
num.push(7)
console.log(`o nosso vetor é o [ ${num} ]`)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor é o ${num[0]}`)
let pos= num.indexOf(5)


if (pos == -1){
    console.log(`O valor ${pos} não existe na array`)
} else {
    console.log(`o valor 8 está na posição ${pos}`)
}