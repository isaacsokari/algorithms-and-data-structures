/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
  let number = num;
  let romanNums = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let arabicNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let romanVersion = "";

  for (let i = 0; i < arabicNums.length; i++) {
    while (arabicNums[i] <= number) {
      romanVersion += romanNums[i];
      number -= arabicNums[i];
    }
  }

  // console.log(romanVersion);
  return romanVersion;
}

convertToRoman(36);
