function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //var data = new Date()
    var data = 15
    var hora = data
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = 'sol.png'
        document.body.style.backgroundColor='blue'
    } else if(hora>12 && hora <18){
        img.src = 'tarde.png'
        document.body.style.backgroundColor = 'green'
    } else {
        img.src = 'noite.png'
        document.body.style.backgroundColor = 'red'
    }

   
}