// Only change code below this line
function urlSlug(title) {
var converted = title
  .toLowerCase()
  .trim()
  .split(/\s+/)
  .join("-");
console.log(converted);
return converted;
}
// Only change code above this line
urlSlug("Winter Is Coming")