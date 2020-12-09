function fatorial(n){
  let fat = 1
  for(let c=n; c>1;c--){
    fat *=c //acumula o valor multiplicado
  }
  return fat
}
console.log (fatorial(5))

//ou

function fator (n){
  if(n ==1){
    return 1
  }else {
    return n * fator(n-1)
  }
} 
console.log(fator(5))