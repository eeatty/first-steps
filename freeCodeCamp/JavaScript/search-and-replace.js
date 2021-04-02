function myReplace(str, before, after) {
  var breakApart = str.split(" ");
  var index = breakApart.indexOf(before);
  var replaced = ""
  console.log(/^[A-Z]/.test(before));
  if (/^[A-Z]/.test(before)) {
    var newAfter = after[0].toUpperCase() + after.substring(1);
    breakApart[index] = newAfter;
    replaced = breakApart.join(" ");
    console.log(replaced);
    return replaced;
    } else 
    var newAfter = after[0].toLowerCase() + after.substring(1);
      breakApart[index] = newAfter;
      replaced = breakApart.join(" ");
      console.log(replaced);
      return replaced;
}


myReplace("He is Sleeping on the couch", "Sleeping", "sitting");