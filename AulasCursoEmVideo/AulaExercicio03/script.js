function contar(){
  var avisoi = document.getElementById("txtinicio")
  var avisoii = document.getElementById("txtfim")
  var avisoiii = document.getElementById("txtinter")
  var res= document.querySelector('div#res')
  if (avisoi.value.length ==0){
    window.alert('[Erro] Verifique os dados e tente novamente')
  } else if (avisoii.value.length==0 || Number(avisoii.value)<=Number(avisoi.value)){
    window.alert('[Erro] Valor Final deve ser maior que valor de Inicio!')
  }else if (Number(avisoiii.value)>=(Number(avisoii.value)-Number(avisoi.value))){
    window.alert('[Erro] Valor de intervalo não pode ser superior à diferença entre valor inicial e valor final')
  }else if (avisoiii.value.length==0 || Number(avisoiii.value)<=0){
    window.alert('[Erro] Valor de intervalo deve ser superior a 0!')
  } else {
    var avisoi = document.getElementById("txtinicio")
    var avisoii = document.getElementById("txtfim")
    var avisoiii = document.getElementById("txtinter")
    var inicio = Number(avisoi.value)
    var fim = Number(avisoii.value)
    var inter = Number(avisoiii.value)
    for(inicio ; inicio>=fim ; inicio+inter){
    var res= document.querySelector('div#res')
    res.innerHTML= `${inicio}`
   }
  }
}
