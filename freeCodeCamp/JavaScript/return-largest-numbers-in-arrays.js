function largestOfFour(arr) {
 let newArr = [];
for (let i = 0; i < arr.length; i++) {
  let comp = arr[i][0];
  for (let j = 1; j < arr[i].length; j++) {
    if (arr[i][j] > comp) {
      comp = arr[i][j];
    }
  }
  newArr[i] = comp;
}
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);