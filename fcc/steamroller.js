/* Flatten a nested array. You must account for varying levels of nesting. */

function steamrollArray(arr) {
  let result = [];

  const flatten = (arg) => {
    if (!Array.isArray(arg)) {
      result.push(arg);
    } else {
      for (let each in arg) {
        flatten(arg[each]);
      }
    }
  };
  arr.map(flatten);

  console.log(result);
  return result;
}

steamrollArray([1, [[[[[[2]]]]]], [3, [[4]]]]);
