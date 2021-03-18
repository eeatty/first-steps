function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){return a - b});
  console.log(arr);
  let index = arr.indexOf(num);
  console.log(index);
  return index;
}

getIndexToIns([40, 60], 50);