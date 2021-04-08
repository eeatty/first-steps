function steamrollArray(arr) {
  var flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArr.push(...steamrollArray(arr[i]));
   } else {
     flatArr.push(arr[i]);
   }
 }
console.log(flatArr);
return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);