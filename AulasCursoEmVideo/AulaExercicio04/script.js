function multiplicar(){
  let num = document.getElementById("txtn")
  let tab= document.getElementById('taboada')
  if (num.value.length ==0){
    let res= document.querySelector('div#res')
    window.alert('[Erro] Verifique os dados e tente novamente')
    res.innerHTML= 'Impossivel contar!'
  }else {
    let n = Number(num.value)
    let m = 0
    tab.innerHTML=''
    for(m ; m<=10 ; m++){
      let item= document.createElement(`option`)
      item.text = `${n} x ${m} = ${n*m}`
      item.value = `tab${m}`
      tab.appendChild(item)
    }
  }
}
