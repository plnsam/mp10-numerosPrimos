showPrimos(100)

function showPrimos(numeroLimite){
  for(let num = 2; num<numeroLimite; num++)
  if (primos(num)) console.log(num)
}

function primos(num){
  for(let div = 2; div < num; div++){
    if (num%div===0) {
      return false
    }
  }
  return true
}