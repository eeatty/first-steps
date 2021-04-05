function sumPrimes(num) {

    function isPrime(num) {
      if (num === 2) return true;
      if (num <= 1) return false;
      if (!Number.isInteger(num)) return false;
      for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
          return false;
        } return true;
      } 
    } 
  console.log(isPrime(5));
   
  }
  
  sumPrimes(10);