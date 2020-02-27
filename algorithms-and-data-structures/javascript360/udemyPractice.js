// first function add 2 numbers

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addTwoNumbers(5, 6));

//second function: introduction
function introduction(firstName, lastName) {
  return `Hi, my name is ${firstName} ${lastName}.`;
}
console.log(introduction("Isaac", "Sokari"));

// third function: convert temperature
function toFahrenheit(celsius) {
  let toFahrenheit = Math.round((9 / 5) * celsius + 32);
  return toFahrenheit;
}
console.log(toFahrenheit(-30));

//fourth function: fizz buzz - fails the DRY principle so is dirty code
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else if (num % 3 === 0) {
    return "fizz";
  }
  return "";
}
console.log(fizzBuzz());

// fizzbuzz2
function fizzbuzz2(num) {
  let result = "";
  if (num % 3 === 0) {
    result += "fizz";
  }
  if (num % 5 === 0) {
    result += "buzz";
  }
  return result;
}
console.log(fizzbuzz2());

// factorialize a number
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return (num *= factorialize(num - 1));
}
console.log(factorialize(4));

// reverse a string
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
console.log(reverseString("codegod"));

//palindrome checker
function palindromeChecker(str) {
  let resultArr, resultStr, reverseStr;
  resultArr = str.toLowerCase().split(/(?:[^\w]*)/);
  // console.log(resultStr);
  resultStr = resultArr.join("");
  reverseStr = resultArr.reverse().join("");
  return resultStr === reverseStr ? true : false;
}
console.log(palindromeChecker("a man, a Plan, a caNal, panama"));
console.log(palindromeChecker("le#!gen++da%ry @ yrad(nege+l"));
