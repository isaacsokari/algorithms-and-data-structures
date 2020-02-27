//fizz buzz - fails the DRY principle so is dirty code
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
