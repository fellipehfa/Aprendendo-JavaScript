// Identificar numeros pares em um intervalo de x a y.
let x = 0
let y = 10
function numpar(x){
  if (x%2==0){
    return x
  }else{
    return "impar"
  }
} for (x;x<=y;x++){
let res = numpar(x)
console.log(res)
// ou console.log(numpar(x))
}