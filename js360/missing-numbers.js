// return the missing number in an array (from 0 - largest number)
// note: only one number can be returned
function missingNumber(arr) {
  let numArr = arr.sort((num1, num2) => (num1 > num2 ? 1 : -1));
  for (let i = 0; i < numArr.length; i++) {
    if (i !== numArr[i]) {
      return i;
    }
  }
}

console.log(missingNumber([0, 5, 6, 7, 2, 8, 1, 9]));
