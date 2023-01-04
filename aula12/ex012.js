var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatemente ${hora} horas`)
if(hora <= 12) {
    console.log("Bom dia, benção!")
} else if (hora <= 18) {
    console.log('Boa tarde, benção!')
} else {
    console.log('Boa noite, benção!')
}