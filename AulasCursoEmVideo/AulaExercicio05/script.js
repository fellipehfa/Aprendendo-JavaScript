let addn = document.getElementById("txtn")
let quadro = document.getElementById("quadronum")
let numeros = []
let res= document.querySelector('div#res')
  function adicionar(){
    if(addn.value.length==0){
    window.alert('[Erro] Insira os dados e tente novamente')
    } else if (Number(addn.value)<1 ||Number(addn.value)>100){
      window.alert('[Erro] Valor não obedece os parametros')
    } else {
      let newn = document.createElement(`option`)
      newn.text = `${Number(addn.value)}`
      numeros.push(Number(addn.value)) 
      numeros.sort()
      quadro.appendChild(newn)
    }
  }
  function verificar(){
    let res= document.querySelector('div#res')
    res.innerHTML = `Ao todo temos ${numeros.length}elementos`
    res.innerHTML = `O maior valor informado é ${numeros[numeros.length-1]}`
    /*
    for (let c=0;c<=numeros.length;c++){
      soma += numeros[c]
    }
    res.innerHTML = `O menor valor informado é ${soma}`
    res.innerHTML = `A soma dos elementos é ${soma/numeros.length}`
    */
  }
