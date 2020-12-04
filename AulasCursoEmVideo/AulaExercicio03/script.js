function contar(){
  var avisoi = document.getElementById("txtinicio")
  var avisoii = document.getElementById("txtfim")
  var avisoiii = document.getElementById("txtinter")
  //var i = 1
  //var ii = 5
  //var iii = 
  var res= document.querySelector('div#res')
  res.innerHTML=`${avisoi}, ${avisoii}, ${avisoiii}`
  if (avisoi.value.length ==0){
    window.alert('[Erro] Verifique os dados e tente novamente')
  } else if (avisoii.value.length==0 || Number(avisoii.value)>=Number(avisoi.value){
    window.alert('[Erro] Valor Final deve ser maior que valor de Inicio!')
  }else if (Number(avisoiii.value)<=Number(avisoii.value)-Number(avisoi.value){
    window.alert('[Erro] Valor de intervalo não pode ser superior à diferença entre valor inicial e valor final')
  }else if (avisoiii.value.length==0 || Number(avisoiii.value)<=0){
    window.alert('[Erro] Valor de intervalo deve ser superior a 0!')
  } else {
    var inicio = avisoi
    var fim = avisoii
    var inter = avisoiii
    //var inicio = 1
    //var fim = 5
    //var inter = 1
   for(inicio ; inicio<=fim ; inicio+inter){
    res.style.textAlign = 'center'
    res.innerHTML=`${inicio}, `
   }
  }
}
