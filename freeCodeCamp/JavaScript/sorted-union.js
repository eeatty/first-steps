function uniteUnique(...arr) {
  var listArr = arr.flat();
  console.log(listArr);
  var simpleArr = listArr.filter(function(item, place) {
    return listArr.indexOf(item) == place;
  });
  console.log(simpleArr);
  return simpleArr;
} 

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);