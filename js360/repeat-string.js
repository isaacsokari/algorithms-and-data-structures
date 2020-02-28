// repeats a passed string n-times
function repeatString(str, num) {
  let repeatedString = "",
    i = 0;
  while (i < num) {
    repeatedString += str;
    i++;
  }
  return repeatedString;
}
console.log(repeatString("BadCommando", 2));

// using the str.repeat method
function repeatString2(str, num) {
  let repeatedString = str.repeat(num);
  return repeatedString;
}
console.log(repeatString2("Commando", 2));
