function addTogether(...arg) {
  
  let args = Array.from(arg);
  let one = args[0];
  let two = args[1];
  let result = 0

  function checkNum(a) {
    return typeof(a) === "number" 
    } 

  if (args.length === 2) {
    if (checkNum(one) && checkNum(two)) {
      return one + two;
    } else {
      return undefined;
    } } else if (args.length === 1) {
      if (checkNum(one)) {
        function addTwo(two) {
          if (checkNum(two)) {
            return one + two;
          } else {
            return undefined;
          } };
          return addTwo;
      } else {
        return undefined;
      } } else {
        return undefined;
      }
  }

addTogether(2,3);