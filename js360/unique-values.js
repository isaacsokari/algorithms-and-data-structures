// returns an array of unique elements from 2 arrays

function findUnique(arr1, arr2) {
  let uniqueArr = [];
  for (elem of arr1) {
    if (!arr2.includes(elem)) {
      uniqueArr.push(elem);
    }
  }
  for (elem of arr2) {
    if (!arr1.includes(elem)) {
      uniqueArr.push(elem);
    }
  }
  return uniqueArr.sort((a, b) => a - b);
}

console.log(findUnique([5, 56, 3, 6, 42], [3, 52, 64, 6, 85, 56]));
