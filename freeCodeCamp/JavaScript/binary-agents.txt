function binaryAgent(str) {
  var biArr = str.split(" ");
  var holding = [];
  for (let i = 0; i < biArr.length; i++) {
   var dec = parseInt(biArr[i], 2).toString(10);
   var letter = String.fromCharCode(dec);
   holding.push(letter);
  }
 var string = holding.join("");
 console.log(string);
 return string;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");