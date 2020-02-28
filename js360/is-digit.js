// checks if a string only contains a number from 0 - 9 i.e. string is a digit
function isDigit(str) {
  let digitArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  return digitArr.includes(str);
}

console.log(isDigit("9"));
