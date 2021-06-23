const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = function(a, b) {
  let stringA = a.join(', ');
  let stringB = b.join(', ');
  if (stringA === stringB) {
    return [a];
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["Fred", "Latoya"], ["Fred", "Latoya"]), true);
assertEqual(eqArrays([null, 2, NaN], [null, 2, NaN]), true);
