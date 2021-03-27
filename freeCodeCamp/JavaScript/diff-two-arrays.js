function diffArray(arr1, arr2) {
  var test = arr1.concat(arr2);
  var newArr = test.filter(item => !arr1.includes(item) || !arr2.includes(item));
console.log(newArr);
  return newArr;

}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);