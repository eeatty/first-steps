function repeatStringNumTimes(str, num) {
  let repeated = "";
  for (let i = num; i > 0; i--) {
    repeated += str;
  }
  console.log(repeated);
  return repeated;
}

repeatStringNumTimes("abc", 3);