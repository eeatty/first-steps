function spinalCase(str) {
var swap = str.split(/\s|_|(?=[A-Z])/);
return swap
  .join("-")
  .toLowerCase();
}

spinalCase('This Is Spinal-Tap');