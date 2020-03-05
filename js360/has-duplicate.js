// checks if array contains duplicate numbers

function hasDuplicate(arr) {
  let numArr = arr.sort((num1, num2) => (num1 > num2 ? 1 : -1));
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === numArr[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(hasDuplicate([8, 9, 6, 2, 3, 1, 7]));
