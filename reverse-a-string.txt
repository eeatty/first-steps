function reverseString(str) {
  var rev = str.split("");
  rev.reverse();
  console.log(rev);
  var revStr = rev.join('');
  console.log(revStr);
  return revStr;
}


reverseString("hello");