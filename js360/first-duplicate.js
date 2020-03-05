// returns the first duplicate in an array of numbers
function firstDuplicate(arr) {
  let numObject = {};
  for (num of arr) {
    if (numObject.hasOwnProperty(num)) {
      return num;
    }
    numObject[num] = num;
  }
}

firstDuplicate([4, 2, 3, 8, 9, 7, 8]);
