// edits a string to properly space words in a sentence

function amendSentence(str) {
  let stringArray = str.split("");
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] !== stringArray[i].toLowerCase() && i > 0) {
      stringArray[i] = stringArray[i].toLowerCase();
      stringArray.splice(i, 0, " ");
    }
  }
  // console.log(stringArray);
  return stringArray.join("").trim();
}
amendSentence("ThisIsAnOverly-chilledSentence");
console.log(amendSentence("ThisIsANot-so-chilledSentence."));
