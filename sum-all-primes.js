function sumPrimes(num) {
  let cl = (x) => console.log(x);
  let sum = 0;
  let start = 0;
  
 let isPrime = (x) => { //verify if number is prime.
   if (x == 1 ){
     return 0;
   }
   if(x == 2){
     return 2;
   }
    for(let i = 2; i < x; i++){
      if(x%i == 0){
        return 0;
      }
    }
    return x;
  }

 for(let i = num; i > 0; i--){
   sum += isPrime(i);
   
 }
  cl(sum)

  return sum;
}

sumPrimes(10);
