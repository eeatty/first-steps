function titleCase(str) {
  var sentence = []
  var small = str.toLowerCase();
  var words = small.split(" ")
  for (let i = 0; i < words.length; i++) {
    var word = words[i].split("")
    var letter = word[0];
    letter = letter.toUpperCase();
    word.splice(0, 1, letter);
    word = word.join("");
    sentence.push(word);
  }
  sentence = sentence.join(" ");
  console.log(sentence);
  return sentence;
} 

titleCase("I'm a little tea pot");
