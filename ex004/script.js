function contar(){
    var ini = document.getElementById('txtin')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')
    while (ini.value <= fim.value) {
        innerHTML = ini.value
        ini = ini.value + pas.value
    }
}