/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

function smallestCommons(arr) {
  let myArr = arr.sort((a, b) => b - a),
    fullArr = [];
  for (let i = myArr[0]; i >= myArr[1]; i--) {
    fullArr.push(i);
  }
  let lcm = fullArr[0];
  for (let i = 1; i < fullArr.length; i++) {
    // hcf = highest common factor == gcd
    let hcf = gcd(lcm, fullArr[i]);
    lcm = (lcm * fullArr[i]) / hcf;
  }
  console.log(lcm);
  return lcm;
}

// euclidean algorithm
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

smallestCommons([1, 5]);

// console.log(gcd(9, 54));
