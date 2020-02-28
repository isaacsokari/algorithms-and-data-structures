//find the length of the longest word in word1 string
function maxLength(str) {
  let maxLength = 0;
  if (typeof str === "string") {
    for (let word of str.split(" ")) {
      word.length > maxLength ? (maxLength = word.length) : maxLength;
    }
    return maxLength;
  }
  return `${str} is not a string`;
}

maxLength("the quick brown monkey fox jumps over the lazy dog");
console.log(maxLength("the quick browns monkey fox jumps over the lazy dog"));
console.log(maxLength(""));

// another solution
function maxLength2(str) {
  let maxLength = str
    .split(" ")
    .sort((word1, word2) => (word1.length > word2.length ? -1 : 1))[0].length;
  return maxLength;
}

maxLength2("the quick brown monkey fox jumps over the lazy dog");
console.log(maxLength2("the quick browns monkey fox jumps over the lazy dog"));
console.log(maxLength2(""));
