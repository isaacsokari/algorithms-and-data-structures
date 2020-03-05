// sums all numbers in a range of two numbers

function sumRange(num1, num2) {
  let sum = 0;
  for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
    sum += i;
  }
  return sum;
}

console.log(sumRange(3, 7));
console.log(sumRange(10, 5));
