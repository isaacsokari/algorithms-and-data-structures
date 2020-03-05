// add all the digits in a string

function digitSum(str) {
  let regex = /\d+/g,
    numArr = str.match(regex),
    sum = 0;
  // console.log(numArr);
  for (let i = 0; i < numArr.length; i++) {
    sum += Number(numArr[i]);
  }
  return sum;
}

console.log(digitSum("10 apples, 43 pens and 5 kids."));
