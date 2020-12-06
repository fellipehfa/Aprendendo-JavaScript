function contar(){
  let avisoi = document.getElementById("txtinicio")
  let avisoii = document.getElementById("txtfim")
  let avisoiii = document.getElementById("txtinter")
  let res= document.querySelector('div#res')
  if (avisoi.value.length ==0 || avisoii.value.length == 0 ||avisoiii.value.length ==0){
    window.alert('[Erro] Verifique os dados e tente novamente')
    res.innerHTML= 'Impossivel contar!'
  }else if (avisoiii.value.length==0 || Number(avisoiii.value)<=0){
    window.alert('[Erro] Valor de intervalo deve ser superior a 0!')
    res.innerHTML= 'Impossivel contar!'
  }else {
    res.innerHTML = "Contando:"
    let inicio = Number(avisoi.value)
    let fim = Number(avisoii.value)
    let inter = Number(avisoiii.value)
    if (inicio < fim){
      for(inicio ; inicio<=fim ; inicio+=inter){
      res.innerHTML+= `${inicio} \u{27A1}	`
      }
    }
    if (inicio > fim){
      for(inicio ; inicio>=fim ; inicio-=inter){
      res.innerHTML+= `${inicio} \u{27A1}	`
      }
    }
    res.innerHTML += `\u{1F918}	` 
  }
}
