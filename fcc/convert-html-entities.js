function convertHTML(str) {
  let strArr = str.split("");

  for (var i = 0; i < strArr.length; i++) {
    switch (strArr[i]) {
      case "<":
        strArr[i] = "&lt;";
        break;
      case "&":
        strArr[i] = "&amp;";
        break;
      case ">":
        strArr[i] = "&gt;";
        break;
      case '"':
        strArr[i] = "&quot;";
        break;
      case "'":
        strArr[i] = "&apos;";
        break;
    }
  }
  return strArr.join("");
}

convertHTML("Dolce & Gabbana");
