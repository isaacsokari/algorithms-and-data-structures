function longestWord(str) {
  let longestWord = str
    .replace(/\W_/, " ")
    .split(" ")
    .sort((word1, word2) => (word1.length > word2.length ? -1 : 1))[0];
  return longestWord;
}

console.log(longestWord("the quick browns monkey fox jumps over the lazy dog"));
