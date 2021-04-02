function fearNotLetter(str) {
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      var missing = str.charCodeAt(i - 1) + 1;
      missing = String.fromCharCode(missing);
      console.log(missing);
      return missing;
    } 
    }return undefined;
  }
fearNotLetter("abce");