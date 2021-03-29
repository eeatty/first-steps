function sumAll(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var count = (max - min + 1)
  return (min + max) * count / 2;
}

sumAll([1, 4]);