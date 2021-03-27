const squareList = arr => {
  // Only change code below this line
 var filtered = arr.filter(num => num > 0 && Number.isInteger(num));
 var squared = filtered.map(num => num * num);
 return squared;

 
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);