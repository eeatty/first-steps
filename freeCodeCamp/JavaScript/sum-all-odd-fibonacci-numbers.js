function sumFibs(num) {
  var fibArr = [];
  var firstNum = 0;
  var secondNum = 1;
  var count = 0;
  while (secondNum <= num) {
    if (secondNum % 2 !== 0) {
      count += secondNum
    }
    secondNum += firstNum;
    firstNum = secondNum - firstNum;
    fibArr.push(secondNum);
  }
  console.log(fibArr, count);
  return count;  
}

sumFibs(4000000);