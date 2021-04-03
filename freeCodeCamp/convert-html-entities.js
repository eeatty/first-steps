function convertHTML(str) {
  var converted = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  console.log(converted);
  return converted;
}

convertHTML("Dolce & Gabbana");