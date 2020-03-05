// sums the digits of a number

function sumDigits(num) {
  let sum = num || 0,
    numArray = sum
      .toString()
      .split("")
      .map(a => parseInt(a));
  return numArray.reduce((sum, curr) => (sum += curr));
}

sumDigits(158);
console.log(sumDigits(8523));
