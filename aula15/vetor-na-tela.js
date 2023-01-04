/*

for(let pos=0;pos < valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
*/
let valores = [1,2,3,4,5]
valores.sort()
for (let pos in valores){
    console.log(`a posiçao ${pos} tem o valor ${valores[pos]}`)
}