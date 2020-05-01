/* Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. */

/* function addTogether() {
  let first = arguments[0];
  if (typeof first !== "number") return undefined;
  if (arguments.length === 1) {
    return function (second) {
      if (typeof second !== "number") return undefined;
      console.log(first, second);
      return first + second;
    };
  }
  let second = arguments[1];
  if (typeof second !== "number") return undefined;
  // console.log(first, second);
  return first + second;
}

addTogether(3); */
// console.log(addTogether(3));

// final solution
function addTogether() {
  let a = arguments[0];

  if (typeof a !== "number") {
    return undefined;
  } else if (arguments.length === 1) {
    return function (b) {
      return typeof b === "number" ? a + b : undefined;
    };
  } else {
    let b = arguments[1];
    return typeof b === "number" ? a + b : undefined;
  }
}

addTogether(2, 3);
