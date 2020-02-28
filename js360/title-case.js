// set all words of a given string to title case i.e. capitalize first letter
function titleCase(str) {
  let titleCase = str
    .split(" ")
    .map(word =>
      word
        .toLowerCase()
        .charAt(0)
        .toUpperCase()
        .concat(word.slice(1))
    )
    .join(" ");
  return titleCase;
}
console.log(titleCase("the quick brown monkey fox jumps over the lazy dog"));
