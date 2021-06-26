const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = function(arr1, arr2) {
  if (arr1 === undefined) return "arr1 is undefined";
  if (arr2 === undefined) return "arr2 is undefined";
  let isEqual =
  arr1.length === arr2.length ?
    arr1.every(function(element, index) {
      return element === arr2[index];
    }) : false;
  return isEqual;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["Fred", "Latoya"], ["Fred", "Latoya"]), true);
assertEqual(eqArrays([1, 2, "red"], [1, 2, "green"]), true);
