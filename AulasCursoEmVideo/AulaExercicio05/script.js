let addn = document.getElementById("txtn")
let Lista = document.getElementById("listanum")
let numeros = []
let soma =0
let res= document.querySelector('div#res')
function verificaN (n){
  if(Number(n)>=1 && Number(n)<=100){
    return true
  } else {
    return false
  }
}
function verificaL (n, l){
  if(l.indexOf(Number(n))!=-1){
    return true
  } else {
    return false
  }
}
function adicionar(){
  if((verificaN(addn.value)) && !(verificaL(addn.value, numeros))){
    numeros.push(Number(addn.value))
    let newn = document.createElement(`option`)
    newn.text = `Valor ${Number(addn.value)} adicionado` 
    numeros.sort()
    Lista.appendChild(newn)
    res.innerHTML=''
  } else {
    window.alert('[Erro] Valor não obedece os parametros ou já se encontra na lista')
  }
  addn.value = ''//adicionado apos a correção
  addn.focus() //adicionado apos a correção
  //para limpar caixa de texto e voltar o cursor até o mesmo.
}
function verificar(){
  let soma =0//adicionado apos correção (para recalcular soma e média caso serja adicionado um numero depois de ja ter verificado alguma vez)
  if (numeros.length ==0){
    window.alert("[Erro] Não há numeros cadastrados")
  }else{//Adicionado janela de aviso apos a correção (esqueci mesmo xD)
    res.innerHTML += `Ao todo temos ${numeros.length} elementos<br>`
    res.innerHTML += `O maior valor informado é ${numeros[numeros.length-1]}<br>`
    res.innerHTML += `O menor valor informado é ${numeros[0]}<br>`
    for(let pos in numeros){
      soma = soma + numeros[pos]
    }
    res.innerHTML += `A soma dos elementos é ${soma}<br>`
    res.innerHTML += `A média entre a somatoria dos elementos é ${soma/numeros.length}<br>`
    addn.value = ''
    addn.focus()
  }
}
