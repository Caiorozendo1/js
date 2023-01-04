
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fam = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fam.value.length == 0 || fam.value > ano) {
        window.alert('verifique os dados novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fam.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10 ) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade > 10 && idade < 21 ){
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50){
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade <= 10){
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21){
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if(idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            }else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}