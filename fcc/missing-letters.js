/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
  let initChar = str.charCodeAt(0);
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (str.charCodeAt(i) !== initChar + i) {
      return String.fromCharCode(initChar + i);
    }
  }
}

fearNotLetter("abce");
