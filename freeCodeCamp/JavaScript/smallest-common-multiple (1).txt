function smallestCommons(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var list = [];
  for (let i = min; i <= max; i++) {
    list.push(i);
  }

  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
  
  const lcm = (a, b) => a * b /gcd(a, b);

  return list.reduce((multiple, curr) => lcm(multiple, curr));

}


smallestCommons([1, 13]);