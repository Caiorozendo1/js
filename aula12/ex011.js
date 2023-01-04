var idade = 66
console.log(`Você tem ${idade}`)
if(idade < 16) {
    console.log('nao vota')
} else if(idade < 18 || idade > 65) {
        console.log('Voto opcional')
} else{
    console.log('voto obrigatorio')
}