function palindromeChecker(str) {
  let resultArr, resultStr, reverseStr;
  resultArr = str.toLowerCase().split(/(?:[^\w]*)/);
  // console.log(resultStr);
  resultStr = resultArr.join("");
  reverseStr = resultArr.reverse().join("");
  return resultStr === reverseStr ? true : false;
}
console.log(palindromeChecker("a man, a Plan, a caNal, panama"));
console.log(palindromeChecker("le#!gen++da%ry @ yrad(nege+l"));
