function sumFibs(num) {
    var fibArr = [0, 1, 1];
    var fibCount = 1;
    var newFib = 1;
    while (newFib <= num - 2) {
    newFib += fibCount;
    fibArr.push(newFib);
    fibCount = newFib - fibCount;
    console.log(fibArr);
  }}
  
  sumFibs(4);