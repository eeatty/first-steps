function destroyer(arr, ...bye) {
 var filteredArr = arr.filter(thing => !bye.includes(thing));
  console.log(filteredArr);
  return filteredArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);