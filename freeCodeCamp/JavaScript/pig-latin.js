function translatePigLatin(str) {
  var translated = "";
  var vowels = /[aeiou]/gi;
  if (str[0].match(vowels)) {
    translated = str + "way";
  } else if (str.match(vowels) === null) {
    translated = str + "ay";
  } else {
    var vowelIndex = str.indexOf(str.match(vowels)[0]);
    translated = str.substr(vowelIndex) + str.substr(0, vowelIndex) + "ay";
  }
 console.log(translated);
 return (translated);
}

translatePigLatin("consonant");