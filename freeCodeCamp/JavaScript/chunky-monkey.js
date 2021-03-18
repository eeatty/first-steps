function chunkArrayInGroups(arr, size) {
  var chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    let holding = arr.slice(i, i + size)
    chunkedArr.push(holding);
  }
  console.log(chunkedArr); 
  return chunkedArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);