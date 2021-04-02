function pairElement(str) {
  var pairs = str.split("");
  for (let i = 0; i < pairs.length; i++) {
    if (pairs[i] == "G") {
      pairs[i] = ["G", "C"];
    } else if (pairs[i] == "C") {
      pairs[i] = ["C", "G"];
    } else if (pairs[i] == "A") {
      pairs[i] = ["A", "T"];
    } else if (pairs[i] == "T") {
      pairs[i] = ["T", "A"];
    } 
}
console.log(pairs);
return pairs;
}
pairElement("ATCGA");