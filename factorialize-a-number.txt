var counter = 1;
function factorialize(num) {
  for (var counter = 1; num > 0; num--) {
   counter *= num;
   console.log(counter);
  }
  return counter;
}

factorialize(5);