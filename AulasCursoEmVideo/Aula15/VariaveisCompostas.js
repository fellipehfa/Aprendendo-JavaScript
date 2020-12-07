let num = [5,4,9,7,2]
num.push(6)//adiciona um elemento na ultima casa do vetor
num.length //quantos elementos tem no arrey
console.log(`Nosso vetor é ${num}`)
console.log(`Nosso vetor tem ${num.length} elementos`)
console.log(`Que em ordem ficaria ${num.sort()}`)
for (let pos=0;pos<num.length;pos++){
console.log (`Na posição ${pos} o elemento do vetor é ${num[pos]}`)
}
console.log('SIMPLIFICANDO!!!')
for(let pos in num){
console.log (`Na posição ${pos} o elemento do vetor é ${num[pos]}`)
}
console.log (num.indexOf(9))
console.log (num.indexOf(1))