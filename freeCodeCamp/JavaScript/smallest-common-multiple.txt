function smallestCommons(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var list = [];
  for (let i = min; i <= max; i++) {
    list.push(i);
  }
  let upperLimit = 1;
  for (let j = min; j <= max; j++) {
    upperLimit *= j
  }  
  
  for (let multiple = max; multiple <= upperLimit; multiple += max) {
    const divisible = list.every((val) => multiple % val === 0);
    if(divisible) {
      console.log(multiple);
      return multiple;
    } 
  } 
}


smallestCommons([1, 13]);