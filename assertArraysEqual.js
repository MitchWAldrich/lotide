const eqArrays = function(a, b) {
  let stringA = a.join(', ');
  let stringB = b.join(', ');
  if (stringA === stringB) {
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 3, 2]);
assertArraysEqual(["Fred", "Latoya"], ["Fred", "Latoya"]);
assertArraysEqual([null, 2, NaN], [null, 2, NaN]);
assertArraysEqual([0, "zero", ""], [0, "zero", "none"]);

