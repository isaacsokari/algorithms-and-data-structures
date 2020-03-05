// sums all numbers in a range of numbers

function sumRange(numArray) {
  let sum = 0;
  for (let i = Math.min(...numArray); i <= Math.max(...numArray); i++) {
    sum += i;
  }
  return sum;
}

console.log(sumRange([3, 7]));
console.log(sumRange([10, 5]));
